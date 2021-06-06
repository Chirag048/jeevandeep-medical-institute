const Form = require('../models/contactformModel')

const contactformCtrl = {
    getContactform: async (req, res) => {
        try {
            const formDetils = await Form.find()
            res.json(formDetils)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    createContactform: async (req, res) => {
        try {
            const { firstName, lastName, email, number, course, message } = req.body;

            if (number.length < 10)
                return res.status(400).json({ msg: "Plese enter Correct Number" })

            const newForm = new Form({
                firstName, lastName, email, number, course, message
            })

            await newForm.save()

            res.json({ msg: "Form Submited Suceesfull" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}

module.exports = contactformCtrl
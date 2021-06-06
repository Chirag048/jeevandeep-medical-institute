const router = require('express').Router()
const contactformCtrl = require('../controllers/contactformCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.route('/contactform')
    .get(auth, authAdmin, contactformCtrl.getContactform)
    .post(contactformCtrl.createContactform)

module.exports = router
const mongoose = require('mongoose')


const contactformSchema = new mongoose.Schema({
    firstName:{
        type: String,
        trim: true,
        required: true
    },
    lastName:{
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    course:{
        type: String,
        required: true
    },
    message: {
        type: String
    }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("Contactform", contactformSchema)
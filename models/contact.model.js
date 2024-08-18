const mongoose = require('mongoose');

const ContactFormSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Message: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('ContactForm', ContactFormSchema);

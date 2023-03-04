const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator')



const contactSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        minlength: [3, 'minimum name length is 3 characters'],
        required: [true, 'field *name* is required']
    },
    phone: {
        type: String,
        match: /^09[0|1|2|3|9][0-9]{8}$/,
        unique: true,
        required: [true, 'field *phone* is required']
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        validate: [isEmail, 'please enter a valid email'],
        required: [true, 'field *email* is required']
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Contact', contactSchema);
const { body, validationResult } = require('express-validator');

const validateContact = [
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({ min: 3 })
        .withMessage('minimum 3 characters required'),

    body('email')
        .isEmail()
        .withMessage('invalid email address'),
        
        body('phone')
        .matches(/^09[0|1|2|3|9][0-9]{8}$/)
        .withMessage('invalid phone number'),

    (req, res, next) => {
        const errors = validationResult(req); 
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        next();
    },
];

module.exports = { validateContact }
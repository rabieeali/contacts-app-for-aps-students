const { check, validationResult } = require('express-validator');

exports.validateContact = [
    check('name')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('name can not be empty')
        .bail()
        .isLength({ min: 3 })
        .withMessage('minimum 3 characters required')
        .bail(),

    check('email')
        .trim()
        .normalizeEmail()
        .not()
        .isEmpty()
        // .withMessage('email can not be empty')
        .isEmail()
        .withMessage('invalid email address')
        .bail(),
        
        check('phone')
        .trim()
        .not()
        .isEmpty()
        // .withMessage('phone can not be empty')
        .escape()
        // .exists({ checkFalsy: true })
        // .isLength({ min: 11, max: 11 })
        .matches(/^09[0|1|2|3|9][0-9]{8}$/)
        .withMessage('invalid phone number')
        .bail(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
];
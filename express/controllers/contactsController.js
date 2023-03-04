const Contact = require('../models/Contact')


// @desc - all contacts
// @route - GET '/contacts'
// @access - public

const getAllContacts = async (req, res) => {
    const contacts = await Contact.find()
    if (!contacts) return res.status(204).json({ 'message': 'No contacts found.' });
    res.json(contacts);
}

// @desc - one contact
// @route - GET '/contacts/:id'
// @access - public

const getSingleContact = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'contact id required.' });

    const contact = await Contact.findOne({ _id: req.params.id }).exec();
    if (!contact) {
        return res.status(204).json({ "message": `no contact matches ID ${req.params.id}.` });
    }
    res.json(contact);
}

// @desc - the newly created contact
// @route - POST '/contacts'
// @access - public

const createNewContact = async (req, res) => {
    const { name, email, phone } = req?.body
    if (!name || !phone || !email) {
        return res.status(400).json({ 'message': 'name, phone and email are required' });
    }

    // Check for duplicate email
    const duplicateEmail = await Contact.findOne({ email }).lean().exec()
    if (duplicateEmail) {
        return res.status(409).json({ message: 'duplicate email' })
    }

    // Check for duplicate phone
    const duplicatePhone = await Contact.findOne({ phone }).lean().exec()
    if (duplicatePhone) {
        return res.status(409).json({ message: 'duplicate phone' })
    }

    try {
        const newContact = await Contact.create({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email
        });

        res.status(201).json(newContact);
    } catch (err) {
        console.error(err);
    }
}

// @desc - the updated contact
// @route - PUT '/contacts'
// @access - public

const updateContact = async (req, res) => {
    const { name, email, phone, id } = req?.body
    if (!id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const contact = await Contact.findOne({ _id: id }).exec();
    if (!contact) {
        return res.status(204).json({ "message": `no contact matches ID ${id}.` });
    }


    // Check for duplicate email
    const duplicateEmail = await Contact.findOne({ email }).lean().exec()
    if (duplicateEmail) {
        return res.status(409).json({ message: 'duplicate email' })
    }

    // Check for duplicate phone
    const duplicatePhone = await Contact.findOne({ phone }).lean().exec()
    if (duplicatePhone) {
        return res.status(409).json({ message: 'duplicate phone' })
    }

    if (req.body?.name) contact.name = name;
    if (req.body?.email) contact.email = email;
    if (req.body?.phone) contact.phone = phone;
    const updatedContact = await contact.save();
    res.json(updatedContact);
}

// @desc - the deleted contact
// @route - DELETE '/contacts'
// @access - public

const deleteContact = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'message': 'contact ID required.' });

    const contact = await Contact.findOne({ _id: req.body.id }).exec();
    if (!contact) {
        return res.status(204).json({ "message": `no contact matches ID ${req.body.id}.` });
    }
    const result = await contact.deleteOne(); //{ _id: req.body.id }
    res.json(result);
}


module.exports = {
    getAllContacts,
    getSingleContact,
    createNewContact,
    updateContact,
    deleteContact
}
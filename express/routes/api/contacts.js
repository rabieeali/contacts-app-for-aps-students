const express = require('express');
const router = express.Router();
const { validateContact } = require('../../middlewares/contactValidator')
const {
    getAllContacts,
    getSingleContact,
    createNewContact,
    updateContact,
    deleteContact } = require('../../controllers/contactsController')

router.route('/')
    .get(getAllContacts)
    .post(createNewContact)
    .put(updateContact)
    .delete(deleteContact)

router.route('/:id')
    .get(getSingleContact)


module.exports = router;
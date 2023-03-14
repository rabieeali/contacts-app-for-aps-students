import * as TYPES from './actionTypes'


export const getContactsCreator = (allContacts) => {
    return {
        type: TYPES.GET_CONTACTS,
        payload: allContacts
    }
}

export const deleteContactCreator = () => {
    return {
        type: TYPES.DELETE_CONTACT,
    }
}

export const addContactCreator = () => {
    return {
        type: TYPES.ADD_CONTACT
    }
}


export const getSingleContactCreator = (singleContact) => {
    return {
        type: TYPES.GET_SINGLE_CONTACTS,
        payload: singleContact
    }
}

export const editContactCreator = (updatedContact) => {
    return {
        type: TYPES.EDIT_CONTACT,
        payload: updatedContact
    }
}
import axios from '../../api/axios'
import {
    addContactCreator,
    deleteContactCreator,
    getContactsCreator,
    getSingleContactCreator
} from './actionCreators'


export const getContactsAction = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/contacts')
            const allContacts = response.data

            dispatch(getContactsCreator(allContacts))

        } catch (err) {
            console.log(err)
        }
    }
}


export const deleteContactAction = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete('/contacts', { data: { _id: id } })

            dispatch(deleteContactCreator())
            dispatch(getContactsAction())

        } catch (err) {
            console.log(err)
        }
    }
}


export const addNewContactAction = (newContact) => {
    return async (dispatch) => {
        try {
            await axios.post('/contacts', newContact)
            dispatch(addContactCreator())
            dispatch(getContactsAction())
        } catch (err) {
            console.log(err)
        }
    }
}


export const getSingleUserAction = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/contacts/${id}`)
            dispatch(getSingleContactCreator(response.data))
        } catch (err) {
            console.log(err)
        }
    }
}


export const editContactAction = (updateContact) => {
    return async (dispatch) => {
        try {
            await axios.put('/contacts', updateContact)
        } catch (err) {
            console.log(err)
        }
    }
}
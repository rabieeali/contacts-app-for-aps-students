import axios from '../../api/axios'
import * as TYPES from '../actions/actionTypes'

// GET ALL

export const getContacts = () => {
    return async (dispatch) => {
        try {

            dispatch({ type: TYPES.GET_ALL_CONTACTS_REQUEST })

            const response = await axios.get('contacts')
            const contacts = await response?.data

            dispatch({ payload: contacts, type: TYPES.GET_ALL_CONTACTS_SUCCESS })

        } catch (err) {

            dispatch({ payload: err?.message, type: TYPES.GET_ALL_CONTACTS_FAILURE })

        }
    }
}

// GET SINGLE

export const getCurrentContact = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: TYPES.GET_SINGLE_CONTACT_REQUEST })
            const response = await axios.get(`/contacts/${id}`)
            const contact = await response?.data

            dispatch({ payload: contact, type: TYPES.GET_SINGLE_CONTACT_SUCCESS })

        } catch (err) {
            dispatch({ payload: err?.message, type: TYPES.GET_SINGLE_CONTACT_FAILURE })
        }
    }
}
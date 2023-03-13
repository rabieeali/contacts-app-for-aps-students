import axios from '../../api/axios'
import * as TYPES from '../actions/actionTypes'


export const updateContact = (newContact) => {
    return async (dispatch) => {
        try {
            dispatch({ type: TYPES.UPDATE_CONTACT_REQUEST })
            const response = await axios.put(`/contacts`, newContact, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            })
            const contact = await response?.data

            dispatch({ payload: contact, type: TYPES.UPDATE_CONTACT_SUCCESS })

        } catch (err) {
            dispatch({ payload: err?.message, type: TYPES.UPDATE_CONTACT_FAILURE })
        }
    }
}
import axios from '../../api/axios'
import * as TYPES from '../actions/actionTypes'

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
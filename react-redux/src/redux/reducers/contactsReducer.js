import * as TYPES from '../actions/actionTypes'

const initialState = {
    contacts: [],
    loading: false,
    error: null
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_ALL_CONTACTS_REQUEST:
            return { ...state, loading: true };

        case TYPES.GET_ALL_CONTACTS_SUCCESS:
            return { ...state, loading: false, contacts: action.payload };

        case TYPES.GET_ALL_CONTACTS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state
    }
}

// export const selectContacts = state => state.contacts

export default contactsReducer
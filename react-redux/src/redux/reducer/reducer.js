import * as TYPES from '../action/actionTypes'

const initialState = {
    contacts: [],
    currentContact: {},
    loading: true,
    error: null
}

const contactsReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case TYPES.GET_CONTACTS:
            return { ...state, loading: false, contacts: payload }
        case TYPES.DELETE_CONTACT:
            return { ...state, loading: false }
        case TYPES.ADD_CONTACT:
            return { ...state, loading: false }
        case TYPES.EDIT_CONTACT:
            return { ...state, loading: false }
        case TYPES.GET_SINGLE_CONTACTS:
            return { ...state, currentContact: payload }
        default:
            return state;
    }
}

export default contactsReducer
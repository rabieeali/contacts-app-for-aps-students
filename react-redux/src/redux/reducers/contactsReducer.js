import * as TYPES from '../actions/actionTypes'

const initialState = {
    contacts: [],
    loading: false,
    error: null,
    currentContact: {}
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        //GET
        case TYPES.GET_ALL_CONTACTS_REQUEST:
            return { ...state, loading: true };

        case TYPES.GET_ALL_CONTACTS_SUCCESS:
            return { ...state, loading: false, contacts: action.payload };

        case TYPES.GET_ALL_CONTACTS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        // GET/:id
        case TYPES.GET_SINGLE_CONTACT_REQUEST:
            return { ...state, loading: true }

        case TYPES.GET_SINGLE_CONTACT_SUCCESS:
            return { ...state, loading: false, currentContact: action.payload }

        case TYPES.GET_SINGLE_CONTACT_FAILURE:
            return { ...state, loading: false, error: action.payload }
        
            // PUT
            case TYPES.UPDATE_CONTACT_REQUEST:
                return { ...state, loading: true }
    
            case TYPES.UPDATE_CONTACT_SUCCESS:
                return { ...state, loading: false, contact: action.payload }
    
            case TYPES.UPDATE_CONTACT_FAILURE:
                return { ...state, loading: false, error: action.payload }
            
        default:
            return state
    }
}

// export const selectContacts = state => state.contacts

export default contactsReducer
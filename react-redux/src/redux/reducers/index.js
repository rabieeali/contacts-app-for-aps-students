import { combineReducers } from "redux";
import contactsReducer from "./contactsReducer";


export const reducers = combineReducers({
    contacts: contactsReducer
})
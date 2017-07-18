import { combineReducers } from 'redux'
import { fetchData, asyncActionCreator } from "../../../common/utils";

const fetchContactsUrl = '/im/FriendsRelationship/getFriendsLocal'

const FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST'
const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS'
const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE'

const fetchContactsActions = {
    request: FETCH_CONTACTS_REQUEST,
    success: FETCH_CONTACTS_SUCCESS,
    failure: FETCH_CONTACTS_FAILURE,
}

export const fetchContacts = asyncActionCreator(fetchContactsActions, fetchContactsUrl)

export const contacts = (state = [], { type, payload }) => {
    switch (type) {
        case FETCH_CONTACTS_REQUEST:
            return { ...state, ...payload }
        case FETCH_CONTACTS_SUCCESS:
            return { ...state, ...payload }
        case FETCH_CONTACTS_FAILURE:
            return { ...state, ...payload }
        default:
            return state
    }
}
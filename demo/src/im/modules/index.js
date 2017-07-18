import { combineReducers } from 'redux'

import { conversations, chatting, chatWithPeople, sendMessage } from './conversations'
import { contacts, fetchContacts } from './contacts'

const im = combineReducers({
    conversations,
    chatting,
    contacts,
})

export {
    conversations,
    chatting,
    chatWithPeople,
    sendMessage,
    contacts,
    fetchContacts
}

export default im
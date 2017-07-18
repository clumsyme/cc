import { combineReducers } from 'redux'

//! 测试数据
import { contacts } from '../TEST_DATA'

export const sendMessage = (text, to) => ({
    type: 'SEND_MESSAGE',
    text,
    to,
})

// export const inputContent = (content, to) => ({
//     type: 'INPUT_CONTENT',
//     content,
//     to,
// })

export const conversations = (state = contacts, action) => {
    switch (action.type) {
        case ('SEND_MESSAGE'):
            return state.map((con) => {
                if (con.name === action.to) {
                    con.messages.push({
                        sending: true,
                        content: action.text,
                    })
                }
                return con
            })
        // case ('INPUT_CONTENT'):
        //     return state.map((con) => {
        //         if (con.name === action.to) {
        //             return {...con, inputContent: action.content}
        //         }
        //         return con
        //     })
        default:
            return state
    }
}

export const chatWithPeople = (people) => ({
    type: 'CHAT_WITH_PEOPLE',
    people,
})

export const chatting = (state = null, action) => {
    switch (action.type) {
        case 'CHAT_WITH_PEOPLE':
            return action.people
        default:
            return state
    }
}

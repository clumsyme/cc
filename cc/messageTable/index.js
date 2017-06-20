// @ts-check

import React, { Component } from 'react'
import Avatar from '../avatar'
import './style.css'

const SendBubble = ({ avatar, content }) => {
    return (
        <div className="cc_bubble_send">
            <span className="cc_bubble_send_content">
                {content}
            </span>
            <div className="cc_bubble_send_deco" />
            <Avatar src={avatar} />
        </div>
    )
}

const ReceiveBubble = ({ avatar, content }) => (
    <div className="cc_bubble_receive">
        <Avatar src={avatar} />
        <div className="cc_bubble_receive_deco" />
        <span className="cc_bubble_receive_content">
            {content}
        </span>
    </div>
)

export default class MessageTable extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { chatting, me } = this.props
        return (
            <div className="cc_message_table_wrapper">
                <div className="cc_message_table_header">
                    {chatting ? chatting.name : ''}
                </div>
                <div className="cc_message_table">
                    {chatting && chatting.messages.map((message, index) => {
                        if (message.sending) {
                            return <SendBubble avatar={me} content={message.content} key={index} />
                        }
                        return <ReceiveBubble avatar={chatting.avatar} content={message.content} key={index} />
                    })}
                </div>
            </div>
        )
    }
}
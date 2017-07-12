import React, { Component } from 'react'
import { Button, Avatar } from 'antd'
import './styles.css'

export default class Conversation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { avatar, name, message, time, onClick, unread } = this.props
        return (
            <div className="im-conversation-item" onClick={onClick}>
                <div className="im-conversation-left">
                    <Avatar className="im-avatar" src={avatar} size="large" />
                    <div className="im-conversation-info">
                        <p className="im-conversation-name">{name}</p>
                        <p className="im-conversation-message">{message}</p>
                    </div>
                </div>
                <span className="im-conversation-right">
                    19:10
                </span>
            </div>
        )
    }
}
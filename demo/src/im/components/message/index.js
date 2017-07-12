import React, { Component } from 'react'
import { Avatar } from 'antd'
import './styles.css'

export class SendBubble extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {avatar, content} = this.props
        return (
            <div className="im-bubble-send">
                <span className="im-bubble-send-content" dangerouslySetInnerHTML={{ __html: content }} />
                <div className="im-bubble-send-deco" />
                <Avatar className="im-avatar" src={avatar} size="large" />
            </div>
        )
    }
}

export class ReceiveBubble extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {avatar, content} = this.props
        return (
            <div className="im-bubble-receive">
                <Avatar className="im-avatar" src={avatar} size="large" />
                <div className="im-bubble-receive-deco" />
                <span className="im-bubble-receive-content" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        )
    }
}
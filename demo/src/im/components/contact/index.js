import React, { Component } from 'react'
import { Avatar, Icon } from 'antd'
import './styles.css'

export default class Contact extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { avatar, name, onClick } = this.props
        return (
            <div className="im-contact-item" onClick={onClick}>
                <Avatar className="im-avatar" src={avatar} size="large" />
                <span className="im-contact-name">
                    {name}
                </span>
            </div>
        )
    }
}
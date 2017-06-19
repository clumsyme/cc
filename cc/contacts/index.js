// @ts-check

import React, { Component } from 'react'
import Avatar from '../avatar'
import './style.css'

export default class Contacts extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { avatar, name, onClick, unread } = this.props
        return (
            <div className="cc_contact_item" onClick={onClick}>
                <Avatar src={avatar} alt={name} unread={unread} />
                <span className="cc_contact_name">
                    <h4>{name}</h4>
                </span>
            </div>
        )
    }
}

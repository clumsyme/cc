import React, { Component } from 'react'
import { Input, Avatar } from 'antd'
import { Contact } from '../components'

//! 测试数据
import { contacts } from '../TEST_DATA'

export default class ContactList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="contacts-list">
                {contacts.map((c) => (
                    <Contact avatar={c.avatar} name={c.name} key={c.name} onClick={() => this.props.onChatWith(contacts)} />
                ))}
            </div>
        )
    }
}
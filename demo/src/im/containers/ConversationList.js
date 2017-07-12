import React, { Component } from 'react'
import { Input } from 'antd'
import { Conversation } from '../components'

//! 测试数据
import { contacts } from '../TEST_DATA'

export default class ConversitionList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="conversation-list">
                    {contacts.map((c) => (
                        <Conversation avatar={c.avatar} name={c.name} message={c.message} key={c.name} />
                    ))}
            </div>
        )
    }
}
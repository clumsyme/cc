import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Input, Avatar } from 'antd'
import { Contact } from '../components'
import { chatWithPeople } from '../modules'

//! 测试数据
import { contacts } from '../TEST_DATA'

class ContactList extends Component {
    constructor(props) {
        super(props)
    }

    openChat = (people) => {
        this.props.openChatWindow()
        this.props.chatWithPeople(people)
    }

    render() {
        return (
            <div id="contact-list">
                {contacts.map((c) => (
                    <Contact avatar={c.avatar} name={c.name} key={c.name} onClick={() => this.openChat(c)} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ chatWithPeople }, dispatch)
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(ContactList)
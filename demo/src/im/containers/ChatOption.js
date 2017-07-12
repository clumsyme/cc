import React, { Component } from 'react'
import { Icon } from 'antd'
import { Contracts } from '../components'
import ChatAddPeople from './ChatAddPeople'

//! 测试数据
import { contracts } from '../TEST_DATA'

export default class ChatOption extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addPeopleVisible: false,
        }
    }

    onCloseAddPeople = () => {
        this.setState({
            addPeopleVisible: false,
        })
    }

    onAddPeople = () => {
        this.setState({
            addPeopleVisible: true,
        })
    }

    render() {
        return (
            <div className={this.props.visible ? "im-chat-option slidein" : "im-chat-option"}>
                <div className="im-chat-option-add">
                    <Icon type="plus-square-o" className="im-chat-option-addbutton" onClick={this.onAddPeople} />
                    <span>添加成员</span>
                </div>
                {
                    //! 联系人不要 slice
                }
                {contracts.slice(0, 3).map((c) => (
                    <Contracts name={c.name} avatar={c.avatar} key={c.name} />
                ))}
                <ChatAddPeople visible={this.state.addPeopleVisible} onCloseAddPeople={this.onCloseAddPeople} />
            </div>
        )
    }
}
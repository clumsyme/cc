// @ts-check
import React, { Component } from 'react';
import { Contacts, MessageTable } from 'cc'

function scrollBottom(comp, time = 125) {
    let needScroll = comp.scrollHeight - comp.scrollTop - comp.clientHeight
    let speed = needScroll / time

    let it = setInterval(() => {
        if (comp.scrollTop < comp.scrollHeight - comp.clientHeight) {
            comp.scrollTop += speed * 10
        } else {
            clearInterval(it)
        }
    }, 10)
}

export default class MessageTableDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactsList: [
                {
                    avatar: 'https://img3.doubanio.com/icon/u40946569-12.jpg',
                    name: 'Sophie',
                    unread: 3,
                    id: 1,
                },
                {
                    avatar: 'https://img1.doubanio.com/icon/u52641881-7.jpg',
                    name: 'Taylor',
                    id: 2,
                },
                {
                    avatar: 'https://img3.doubanio.com/icon/u43038476-14.jpg',
                    name: 'Scarlett',
                    id: 3,
                },
                {
                    avatar: 'https://img3.doubanio.com/icon/u3228511-30.jpg',
                    name: 'Ronan',
                    unread: '100+',
                    id: 4,
                },
                {
                    avatar: 'https://img3.doubanio.com/icon/u8285356-16.jpg',
                    name: 'Liv',
                    id: 5,
                },
            ],
            messages: [],
            chatting: null,
            inputValue: '',
        }
    }
    chatWith = (contacts) => {
        console.log(contacts)
        this.setState({
            messages: [],
            chatting: contacts
        })
    }
    onChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    onSendMsg = () => {
        const { messages, inputValue, chatting, contactsList } = this.state
        if (!chatting) {
            this.setState({
                chatting: contactsList[3]
            })
        }
        if (!inputValue) { return }
        messages.push({
            sending: true,
            content: inputValue
        })
        this.setState({ messages, inputValue: '' }, () => {
            // =========================
            // 将聊天框滚动至底部
            // =========================
            let box = document.querySelector('.cc_message_table')
            scrollBottom(box)
            // box.scrollTop = box.scrollHeight - box.clientHeight
        })
    }
    onReceiveMsg = () => {
        const { messages, inputValue, chatting, contactsList } = this.state
        if (!chatting) {
            this.setState({
                chatting: contactsList[3]
            })
        }
        if (!inputValue) { return }
        messages.push({
            content: inputValue
        })
        this.setState({ messages, inputValue: '' }, () => {
            // =======================================
            // 接收消息可不滚动至底部，可弹出一提醒点击后滚动
            // =======================================
            let box = document.querySelector('.cc_message_table')
            scrollBottom(box)
        })
    }
    render() {
        return (
            <div className="demo">
                <h2>聊天界面</h2>
                <div className="chatting">
                    <div>
                        {this.state.contactsList.map((contacts, index) => {
                            return <Contacts
                                avatar={contacts.avatar}
                                name={contacts.name}
                                key={contacts.id}
                                onClick={() => { this.chatWith(contacts) }}
                            />
                        })}
                    </div>
                    <div>
                        <MessageTable
                            chatting={this.state.chatting}
                            me="https://avatars2.githubusercontent.com/u/9589947?v=3&s=40"
                            messageList={this.state.messages}
                        />
                        <div>
                            <button type="primary" onClick={this.onSendMsg}>发送</button>
                            <input
                                value={this.state.inputValue}
                                ref={(comp) => { this.input = comp }}
                                onChange={this.onChange}
                            />
                            <button onClick={this.onReceiveMsg}>接收</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
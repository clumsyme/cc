import React, { Component } from 'react'
import ChatOption from './ChatOption'
import { SendBubble, ReceiveBubble } from '../components'
import { Button, Icon } from 'antd'

//! 测试数据
import { contracts } from '../TEST_DATA'
const me = 'https://img1.doubanio.com/icon/u8782032-68.jpg'
const chatting = contracts[0]

export default class MessageTable extends Component {
    constructor(props) {
        super(props)
        this.state= {
            optionVisible: false,
        }
    }

    toggleOptionVisible = () => {
        this.setState((prevState) => ({
            optionVisible: !prevState.optionVisible,
        }))
    }
    render() {
        return (
            <div className={"im-chat-window-wrapper" + " " + this.props.className}>
                <div className="im-chat-window-header">
                    <h2>{chatting ? chatting.name : ''}</h2>
                     <div className="im-chat-window-ctrl">
                        <span className="im-chat-window-option" onClick={this.toggleOptionVisible}><Icon type="ellipsis" /></span>
                        <span className="im-chat-window-closer" onClick={this.props.onCloseChatWindow}><Icon type="close" /></span>
                     </div> 
                </div>
                <div className="im-chat-window">
                    {chatting && chatting.messages.map((message, index) => {
                        if (message.sending) {
                            return <SendBubble avatar={me} content={message.content} key={index} />
                        }
                        return <ReceiveBubble avatar={chatting.avatar} content={message.content} key={index} />
                    })}
                </div>
                <div className="im-chat-window-bar">
                    <div className="im-chat-window-baritem">A</div>
                    <div className="im-chat-window-baritem"><Icon type="smile-o" /></div>
                    <div className="im-chat-window-baritem"><Icon type="folder" /></div>
                    <div className="im-chat-window-baritem"><Icon type="apple-o" /></div>
                    <div className="im-chat-window-baritem"><Icon type="android-o" /></div>
                </div>
                <div className="im-chat-window-input" contentEditable></div>
                <div className="im-chat-window-send">
                    <Button type="primary">发送</Button>
                </div>
                <ChatOption visible={this.state.optionVisible} />
            </div>
        )
    }
}

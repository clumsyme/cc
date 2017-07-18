import React, { Component } from 'react'
import { Button, Icon } from 'antd'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SendBubble, ReceiveBubble } from '../components'
import ChatOption from './ChatOption'
import Emoji from './Emoji'
import { makeDragable, scrollBottom, parseContent, emojis } from '../utils'
import { sendMessage } from '../modules'

import { nim } from './nim'

// console.log(nim)

//! 测试数据
import { contacts } from '../TEST_DATA'
const me = 'https://img1.doubanio.com/icon/u8782032-68.jpg'

class ChatWindow extends Component {
    state = {
        optionVisible: false,
        inputValue: '',
        emojiVisible: false,
    }
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        makeDragable('.im-chat-window-wrapper', '.im-chat-window-header')
        scrollBottom(this.chatWindow, 0)
    }

    componentWillReceiveProps(nextProps) {
        console.warn(nextProps)
        if (nextProps.chatting !== this.props.chatting) {
            this.init()
        }
    }

    init() {
        this.setState({
            optionVisible: false,
            inputValue: '',
            emojiVisible: false,
        })
    }

    changeFont = () => {
        this.setState({
            inputStyle: {
                fontSize: '20px',
                fontWeight: '800',
            }
        })
    }

    toggleOptionVisible = () => {
        this.setState((prevState) => ({
            optionVisible: !prevState.optionVisible,
        }))
    }
    unChatting = () => {
        this.setState({
            optionVisible: false,
        }, () => {
            this.props.onCloseChatWindow()
        })
    }

    onInput = (e) => {
        //! 应该放到接收时处理
        // const parse = (text) => {
        //     let rg = /<(?!img)(.*?)>/g
        //     let replace = (match, tag) => {
        //         return '&lt' + tag + '&gt'
        //     }
        //     return text.replace(rg, replace)
        // }

        this.setState({
            inputValue: e.target.value,
        })
    }

    onCloseEmoji = () => {
        this.setState({
            emojiVisible: false,
        })
    }

    toggleEmojiVisible = () => {
        this.setState((prevState) => ({
            emojiVisible: !prevState.emojiVisible,
        }))
    }

    insertEmoji = (emoji) => {
        let { inputValue } = this.state
        let caret = this.input.selectionStart
        inputValue = inputValue.slice(0, caret) + emoji + inputValue.slice(caret)
        caret += emoji.length
        this.setState({
            inputValue,
        }, () => {
            this.input.focus()
            this.input.setSelectionRange(caret, caret)
        })
    }

    sendMessage = () => {
        if (!this.state.inputValue.trim()) {
            return
        }
        this.props.sendMessage(this.state.inputValue, this.props.chatting.name)
        this.setState({
            emojiVisible: false,
            inputValue: '',
        }, () => {
            scrollBottom(this.chatWindow)
        })
    }

    onKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            this.sendMessage()
        }
    }

    render() {
        const { chatting } = this.props

        return (
            <div className={"im-chat-window-wrapper" + " " + this.props.className}>
                <div className="im-chat-window-header">
                    <h2>{chatting ? chatting.name : ''}</h2>
                    <div className="im-chat-window-ctrl">
                        <span className="im-chat-window-option" onClick={this.toggleOptionVisible}><Icon type="ellipsis" /></span>
                        <span className="im-chat-window-closer" onClick={this.unChatting}><Icon type="close" /></span>
                    </div>
                </div>
                <div className="im-chat-window" onClick={this.onCloseEmoji} ref={(window) => { this.chatWindow = window }}>
                    {chatting && chatting.messages.map((message, index) => {
                        if (message.sending) {
                            return <SendBubble avatar={me} content={parseContent(message.content)} key={index} />
                        }
                        return <ReceiveBubble avatar={chatting.avatar} content={parseContent(message.content)} key={index} />
                    })}
                </div>
                <div className="im-chat-window-bar">
                    <div className="im-chat-window-baritem" onClick={this.changeFont}>A</div>
                    <Emoji
                        toggleEmojiVisible={this.toggleEmojiVisible}
                        visible={this.state.emojiVisible}
                        insertEmoji={this.insertEmoji}
                    />
                    <div className="im-chat-window-baritem"><Icon type="folder" /></div>
                    <div className="im-chat-window-baritem"><Icon type="apple-o" /></div>
                    <div className="im-chat-window-baritem"><Icon type="android-o" /></div>
                </div>
                <textarea
                    className="im-chat-window-input"
                    type="textarea"
                    onKeyDown={this.onKeyDown}
                    rows={6}
                    onChange={this.onInput}
                    onClick={this.onCloseEmoji}
                    value={this.state.inputValue}
                    style={this.state.inputStyle}
                    ref={(input) => { this.input = input }}
                />
                <div className="im-chat-window-send">
                    <Button onClick={this.sendMessage} type="primary">发送</Button>
                </div>
                <ChatOption chatting={this.props.chatting} visible={this.state.optionVisible} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    conversation: state.im.conversation,
    chatting: state.im.chatting,
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ sendMessage }, dispatch)
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(ChatWindow)
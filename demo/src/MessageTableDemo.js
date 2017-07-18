// @ts-check
import React, { Component } from 'react';
import { Contacts, MessageTable } from 'cc'
import emoji from 'emoji-images'
import http from 'http'

/**
 * 将字符串content内除 <img> 标签外的其他标签进行转义；
 * 以防止XSS攻击；
 * @param {string} content
 * @return {string}
 */
const convertContent = (content) => {
    const rg = /<(?!img)(.*?)>/g
    const convert = (match, tag) => {
        return '&lt' + tag + '&gt'
    }
    return content.replace(rg, convert)
}

// const emojify = (content) => {
//     const rg = /:(.*?):/g
// }

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
            contactsList: [],
            chatting: null,
            inputValue: '',
            start: 0,
        }
    }
    componentWillMount() {
        this.fetchContacts(0)
    }
    fetchContacts = (start) => {
        const host = 'https://api.douban.com'
        const path = `/v2/event/28564004/participants?start=${start}`

        http.get(host + path, (res) => {
            res.setEncoding("utf-8");
            var resData = [];
            res.on("data", (chunk) => {
                resData.push(chunk);
            }).on("end", () => {
                const users = JSON.parse(resData.join('')).users
                for (let user of users) {
                    user.messages = []
                }
                this.setState({
                    contactsList: users
                })
            });
        })
    }
    /**
     * 设置正在聊天对象，
     * 此处传入联通对象，因是引用类型，故this.state.chatting和contactsList内的那个对象是同一个对象
     * 对chatting的修改将直接反应在contactsList内。
     * 这是由JS语言特性决定的
     * 如果要显式确定对chatting的修改将反应在contactsList内
     * 可不传入对象二传入index索引，在send或者receive时候，直接修改contactsList[index]
     * @param {string} contacts 联系人
     */
    chatWith = (contacts) => {
        this.setState({
            chatting: contacts
        })
    }
    onChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    decStart = () => {
        this.setState((prevState) => ({
            start: prevState.start - 20
        }), () => {
            this.fetchContacts(this.state.start)
        })
    }

    incStart = () => {
        this.setState((prevState) => ({
            start: prevState.start + 20
        }), () => {
            this.fetchContacts(this.state.start)
        })
    }

    onSendMsg = () => {
        const { inputValue, chatting } = this.state
        if (!inputValue) { return }
        chatting.messages.push({
            sending: true,
            content: convertContent(emoji(inputValue, '/media/emojis', 24)),
        })
        this.setState({ chatting, inputValue: '' }, () => {
            // =========================
            // 将聊天框滚动至底部
            // =========================
            let box = document.querySelector('.cc_message_table')
            scrollBottom(box)
            // box.scrollTop = box.scrollHeight - box.clientHeight
        })
    }
    onReceiveMsg = () => {
        const { inputValue, chatting } = this.state
        if (!inputValue) { return }
        chatting.messages.push({
            // content: convertContent(emoji(inputValue, '/media/emojis', 24)),
            content: convertContent(emoji(inputValue, '/media/emojis', 24)),
        })
        this.setState({ chatting, inputValue: '' }, () => {
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
                <button onClick={this.decStart}>上一页</button>
                <button onClick={this.incStart}>下一页</button>
                <div className="chatting">
                    <div className="clist">
                        {this.state.contactsList.map((contacts, index) => {
                            return <Contacts
                                avatar={contacts.avatar}
                                name={contacts.name}
                                key={contacts.id}
                                onClick={() => { this.chatWith(contacts) }}
                            />
                        })}
                    </div>
                    <div className="mlist">
                        <MessageTable
                            chatting={this.state.chatting}
                            me="https://avatars2.githubusercontent.com/u/9589947?v=3&s=40"
                        />
                        {
                            this.state.chatting
                            &&
                            <div>
                                <button type="primary" onClick={this.onSendMsg}>发送</button>
                                <input
                                    value={this.state.inputValue}
                                    ref={(comp) => { this.input = comp }}
                                    onChange={this.onChange}
                                    onFocus={() => { console.log('focused') }}
                                    onBlur={() => { console.log('blured') }}
                                />
                                <button onClick={this.onReceiveMsg}>接收</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
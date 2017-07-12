import React, { Component } from 'react'
import { Button, Tabs, Icon } from 'antd'
import { Search } from '../components'
import ContractsList from './ContractsList'
import ConversationList from './ConversationList'
import ConversationWindow from './ConversationWindow'
import ChatWindow from './ChatWindow'
import './styles.css'

const TabPane = Tabs.TabPane

export default class IM extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paneVisible: false,
            paneClass: '',
            ischatting: false,
        }
    }

    toggleVisible = () => {
        if (this.state.paneVisible) {
            this.setState({
                paneVisible: false,
                paneClass: 'pane-fadeout'
            })
        } else {
            this.setState({
                paneVisible: true,
                paneClass: 'pane-fadein',
            })
        }
    }

    onChatWith = (contracts) => {
        this.setState({
            ischatting: true,
        })

        //! if drag 
        //! 若要drag，将chat-window与pane平级，并fixed定位
        // const cw = document.getElementsByClassName('im-chat-window-wrapper')[0]
        // cw.onmousedown = (e) => {
        //     cw.dragging = true
        //     cw.dragX = e.clientX
        //     cw.dragY = e.clientY
        // }
        // window.onmousemove = (e) => {
        //     if (cw.dragging) {
        //         let left = window.getComputedStyle(cw).left.split('p')[0]
        //         let top = window.getComputedStyle(cw).top.split('p')[0]
        //         console.log(left + '-' + top)
        //         console.log(e.clientX + '+++' + e.clientY)
        //         // cw.style.left = (left + e.clientX - cw.dragX) + 'px'
        //         // cw.style.top = (top + e.clientY - cw.dragY) + 'px'
        //     }
        // }
        // window.onmouseup = () => {
        //     cw.dragging = false
        // }
    }

    onCloseChatWindow = () => {
        this.setState({
            ischatting: false,
        })
        console.warn('closed')
    }

    render() {
        return (
            <div id="im">
                <Button shape="circle" type="primary" onClick={this.toggleVisible} icon="aliwangwang" size="large" />
                <div id="im-pane" className={this.state.paneClass}>
                    <ChatWindow className={this.state.ischatting ? 'slidein' : 'slideout'} onCloseChatWindow={this.onCloseChatWindow} />
                    <Search />
                    <Tabs
                        className="im-tab"
                        tabBarStyle={{
                            marginBottom: '0',
                        }}
                    >
                        <TabPane tab={<span><Icon type="user" />好友</span>} key="friends">
                            <ContractsList onChatWith={this.onChatWith} />
                        </TabPane>
                        <TabPane tab={<span><Icon type="team" />群组</span>} key="group">
                            <ContractsList />
                        </TabPane>
                        <TabPane tab={<span><Icon type="message" />会话</span>} key="conversition">
                            <ConversationList />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}
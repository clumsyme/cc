import React, { Component } from 'react'
import { Button, Tabs, Icon } from 'antd'
import { Search } from '../components'
import ContactList from './ContactList'
import ConversationList from './ConversationList'
import ConversationWindow from './ConversationWindow'
import ChatWindow from './ChatWindow'
import { makeDragable } from './funcs'
import './styles.css'

const TabPane = Tabs.TabPane

export default class IM extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paneVisible: false,
            paneClass: '',
            chatClass: '',
            ischatting: false,
        }
    }
    componentDidMount() {
        //! if drag 
        makeDragable('#im-pane')
    }

    toggleVisible = () => {
        if (this.state.paneVisible) {
            this.setState({
                paneVisible: false,
                paneClass: 'pane-fadeout',
            })
        } else {
            this.setState({
                paneVisible: true,
                paneClass: 'pane-fadein',
            })
        }
    }

    openChatWindow = (contact) => {
        this.setState({
            ischatting: 'people',
            chatClass: 'slidein',
        })
    }

    onCloseChatWindow = () => {
        this.setState({
            ischatting: false,
            chatClass: 'slideout',
        })
    }

    render() {
        return (
            <div id="im">
                <Button shape="circle" type="primary" onClick={this.toggleVisible} icon="aliwangwang" size="large" />
                <ChatWindow
                    className={this.state.chatClass}
                    onCloseChatWindow={this.onCloseChatWindow}
                />
                <div id="im-pane" className={this.state.paneClass}>
                    <div className="im-pane-head forDrag">
                        <Search />
                    </div>
                    <Tabs
                        className="im-tab"
                        tabBarStyle={{
                            marginBottom: '0',
                        }}
                    >
                        <TabPane tab={<span><Icon type="user" />好友</span>} key="friends">
                            <ContactList openChatWindow={this.openChatWindow} />
                        </TabPane>
                        <TabPane tab={<span><Icon type="team" />群组</span>} key="group">
                            <ContactList />
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
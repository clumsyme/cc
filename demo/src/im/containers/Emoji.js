import React, { Component } from 'react'
import { Icon, Tabs } from 'antd'
import { emojis } from '../utils'


export default class Emoji extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="im-emoji-selector">
                <Icon type="smile-o" onClick={this.props.toggleEmojiVisible} className="im-chat-window-baritem" />
                <div
                    ref={(emoji) => this.emoji = emoji}
                    className={this.props.visible ? "im-emoji-selector-pane scaleup" : "im-emoji-selector-pane"}
                >
                    {emojis.map((emoji) => {
                        return <img
                            src={emoji.file}
                            alt={emoji.tag}
                            title={emoji.tag}
                            key={emoji.tag}
                            className="im-emoji-item"
                            onClick={() => this.props.insertEmoji(emoji.tag)}
                        />
                    })}
                </div>
            </div>
        )
    }
}
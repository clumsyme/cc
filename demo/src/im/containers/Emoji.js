import React, { Component } from 'react'
import { Link } from 'react-router'
import { Icon, Tabs } from 'antd'
import emojis from './emojis'

import emojiIcon from '../../../static/emoji/emoj_s_pressed.png'
import emojiIcon2 from '../../../static/emoji/emoji_30.png'


export default class Emoji extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="im-emoji-selector">
                <Icon type="smile" onClick={this.props.toggleEmojiVisible} className="im-chat-window-baritem" />
                <div
                    ref={(emoji) => this.emoji = emoji}
                    className={this.props.visible ? "im-emoji-selector-pane scaleup" : "im-emoji-selector-pane"}
                >
                    {emojis.map((emoji) => {
                        return <img
                            src={emoji.file}
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
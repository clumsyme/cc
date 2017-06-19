import React, { Component } from 'react';
import { Avatar } from 'cc'

class AvatarDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src: 'https://img3.doubanio.com/icon/u43038476-14.jpg',
        }
    }
    render() {
        return (
            <div className="demo">
                <h2>头像</h2>
                <p>头像：<Avatar src={this.state.src} name='hi' /></p>
                <p>圆形：<Avatar src={this.state.src} name='hi' shape="circle" /></p>
                <p>
                    尺寸：
                    <Avatar src={this.state.src} name='hi' shape="circle" size={60} />
                    <Avatar src={this.state.src} name='hi' shape="circle" size={80} />
                    <Avatar src={this.state.src} name='hi' shape="circle" size={100} />
                </p>
                <p>
                    角标：
                    <Avatar src={this.state.src} name="hi" unread={10} size={30} />
                    <Avatar src={this.state.src} name="hi" />
                    <Avatar src={this.state.src} name="hi" unread={10} size={50} />
                    <Avatar src={this.state.src} name="hi" unread={10} size={60} />
                    <Avatar src={this.state.src} name="hi" unread={10} size={70} />
                </p>
                <p>
                    角标：
                    <Avatar src={this.state.src} name="hi" unread={1} />
                    <Avatar src={this.state.src} name="hi" unread={10} />
                    <Avatar src={this.state.src} name="hi" unread={100} />
                    <Avatar src={this.state.src} name="hi" unread={1000} />
                </p>
            </div>
        );
    }
}

export default AvatarDemo;

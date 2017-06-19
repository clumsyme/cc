// @ts-check
import React, { Component } from 'react'
import './style.css'

export default class Avatar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { avatar, name, style, size, shape } = this.props
        const className = 'cc_avatar' + shape === 'circle' ? ' circle' : ''
        return (
            <span className="cc_avatar_block">
                <img
                    className={className}
                    src={avatar}
                    alt={name}
                    style={{ ...style, width: size + 'px', height: size + 'px' }}
                />
            </span>
        )
    }
}
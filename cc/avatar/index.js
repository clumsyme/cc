// @ts-check
import React, { Component } from 'react'
import './style.css'

export default class Avatar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { src, name, style, size, shape, unread } = this.props
        const className = 'cc_avatar' + (shape === 'circle' ? ' circle' : '')
        return (
            <span
                className="cc_avatar_block"
                style={{ ...style, width: size + 'px', height: size + 'px' }}
            >
                <img
                    className={className}
                    src={src}
                    alt={name}
                />
                {unread && <sup className="cc_avatar_unread">{(!size || size > 40) && unread}</sup>}
            </span>
        )
    }
}
// @ts-check
import React, { Component } from 'react'
import './style.css'

export default class Avatar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { src, name, style, size, shape } = this.props
        const className = 'cc_avatar' + (shape === 'circle' ? ' circle' : '')
        let unread = this.props.unread
        unread = unread > 99 ? '99+' : unread

        let resized
        if (size) {
            resized = {
                width: size + 'px',
                height: size + 'px',
            }
        }

        return (
            <span
                className="cc_avatar_block"
                style={{
                    ...style,
                    ...resized,
                }}
            >
                <img
                    className={className}
                    src={src}
                    alt={name}
                />
                {
                    unread
                    &&
                    (
                        (size && size <= 40)
                            ?
                            <span className="cc_avatar_unread_dot"></span>
                            :
                            <span
                                className="cc_avatar_unread"
                            >
                                {unread}
                            </span>
                    )
                }
            </span>
        )
    }
}
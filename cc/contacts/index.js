// @ts-check

import React, { Component } from 'react';
import './styles.css'

export class Contacts extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { avatar, name } = this.props
        return (
            <div className="cc_contact_item" onClick={this.props.onClick}>
                <div className="cc_contact_avatar_block">
                    <img className="cc_contact_avatar" src={avatar} alt={name} />
                </div>
                <div className="cc_contact_name">
                    <h4>{name}</h4>
                </div>
            </div>
        )
    }
}

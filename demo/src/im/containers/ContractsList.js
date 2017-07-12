import React, { Component } from 'react'
import { Input, Avatar } from 'antd'
import { Contracts } from '../components'

//! 测试数据
import { contracts } from '../TEST_DATA'

export default class ContractsList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="contracts-list">
                {contracts.map((c) => (
                    <Contracts avatar={c.avatar} name={c.name} key={c.name} onClick={() => this.props.onChatWith(contracts)} />
                ))}
            </div>
        )
    }
}
import React, { Component } from 'react'
import { Input } from 'antd'
import './styles.css'

export default class Search extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="im-search-block">
                <Input.Search
                    placeholder="搜索好友、群组"
                    className="im-search-input"
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}
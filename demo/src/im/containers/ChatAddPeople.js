import React, { Component } from 'react'
import { Modal, Input, Button, Icon } from 'antd'
import { Contracts, Search } from '../components'

//! 测试数据
import { contracts } from '../TEST_DATA'

export default class ChatAddPeople extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: [],
        }
    }

    select = (index) => {
        let selected = this.state.selected
        let arrayIndex = selected.indexOf(index)
        if (arrayIndex !== -1) {
            selected.splice(arrayIndex, 1)
            this.setState({
                selected: [...selected],
            })
        } else {
            selected.push(index)
            selected.sort((a, b) => (a - b))
            this.setState({
                selected: [...selected]
            })
        }
    }

    unSelect = (index) => {
        let selected = this.state.selected
        selected.splice(index, 1)
        this.setState({
            selected: [...selected]
        })
    }

    render() {
        const selectedPeople = this.state.selected.map((index) => (
            contracts[index]
        ))
        return (
            <Modal
                title={null}
                footer={null}
                closable={false}
                visible={this.props.visible}
                wrapClassName="im-chat-addpeople"
                width={500}
            >
                <div className="im-chat-addpeople-left">
                    <div className="im-chat-addpeople-search">
                        <Input.Search className="im-chat-addpeople-input" onChange={() => { }} />
                    </div>
                    <div className="im-chat-addpeople-contractsList">
                        {contracts.map((c, index) => (
                            <div className="im-chat-addpeople-contracts" onClick={() => { this.select(index) }} key={c.name}>
                                <Contracts
                                    avatar={c.avatar}
                                    name={c.name}
                                />
                                {
                                    this.state.selected.indexOf(index) !== -1
                                        ?
                                        <Icon type="check" />
                                        :
                                        null
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <div className="im-chat-addpeople-right">
                    <p>已选择:</p>
                    <div className="im-chat-addpeople-selectedList">
                        {selectedPeople.map((c, index) => (
                            <div className="im-chat-addpeople" key={c.name} onClick={() => { this.unSelect(index) }}>
                                <Contracts
                                    avatar={c.avatar}
                                    name={c.name}

                                />
                            </div>
                        ))}
                    </div>
                    <div className="im-chat-addpeople-buttons">
                        <Button className="im-chat-addpeople-nobutton" onClick={this.props.onCloseAddPeople}>NO</Button>
                        <Button className="im-chat-addpeople-okbutton" onClick={this.props.onCloseAddPeople}>OK</Button>
                    </div>
                </div>
            </Modal>
        )
    }
}
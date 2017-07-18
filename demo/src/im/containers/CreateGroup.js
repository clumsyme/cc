import React, { Component } from 'react'
import { Form, Input, Select, Icon, Button, Modal } from 'antd'

class CreateGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
        }
    }

    openModal = () => {
        this.setState({
            modalVisible: true,
        })
    }

    closeModal = () => {
        this.setState({
            modalVisible: false,
        })
    }

    render() {
        const { getFieldDecorator, getFieldsValue } = this.props.form
        return (
            <div className="im-create-group">
                <Button type="primary" onClick={this.openModal} ghost><Icon type="plus"/>创建群组</Button>
                <Modal
                    title="创建群组"
                    visible={this.state.modalVisible}
                    onCancel={this.closeModal}
                >
                    <Form
                        className=""
                        onSubmit={
                            (e) => {
                                e.preventDefault()
                                const query = getFieldsValue()
                                onSubmit(query)
                            }
                        }
                    >
                        <Form.Item
                            label="群名称"
                        >
                            {getFieldDecorator('userMobile', {})(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item
                            label="群介绍"
                        >
                            {getFieldDecorator('content', {})(
                                <Input type="textarea" autosize={{ minRows: 3, maxRows: 6 }} />
                            )}
                        </Form.Item>
                        <Form.Item
                            label="选择群成员"
                        >
                            {getFieldDecorator('contact', {})(
                                <Select mode="multiple">
                                    <Select.Option value="1">1</Select.Option>
                                    <Select.Option value="2">2</Select.Option>
                                    <Select.Option value="3">3</Select.Option>
                                    <Select.Option value="4">4</Select.Option>
                                    <Select.Option value="5">5</Select.Option>
                                </Select>
                            )}
                        </Form.Item>
                        <div>
                            <Button type="primary" htmlType="submit">发送</Button>
                        </div>
                    </Form>
                </Modal>
            </div>
        )
    }
}

CreateGroup = Form.create()(CreateGroup)

export default CreateGroup
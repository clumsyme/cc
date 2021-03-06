import React, { Component } from 'react';
import { Contacts } from 'cc'

class ContactsDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactsList: [
                {
                    avatar: 'https://img3.doubanio.com/icon/u40946569-12.jpg',
                    name: 'Sophie',
                    unread: 3,
                    id: 1,
                },
                {
                    avatar: 'https://img3.doubanio.com/icon/u2735541-26.jpg',
                    name: 'Taylor',
                    id: 2,
                },
                {
                    avatar: 'https://img3.doubanio.com/icon/u43038476-14.jpg',
                    name: 'Scarlett',
                    id: 3,
                },
                {
                    avatar: 'https://img3.doubanio.com/icon/u3228511-30.jpg',
                    name: 'Ronan',
                    unread: '100+',
                    id: 4,
                },
                {
                    avatar: 'https://img3.doubanio.com/icon/u8285356-16.jpg',
                    name: 'Liv',
                    id: 5,
                },
            ]
        }
    }
    render() {
        return (
            <div className="demo">
                <h2>联系人</h2>
                {this.state.contactsList.map((contacts, index) => (
                    <Contacts
                        avatar={contacts.avatar}
                        name={contacts.name}
                        key={contacts.id}
                        unread={contacts.unread}
                    />
                ))}
            </div>
        );
    }
}

export default ContactsDemo;

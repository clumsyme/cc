import React, { Component } from 'react';
import './App.css';
import ContactsDemo from './ContactsDemo'
import AvatarDemo from './AvatarDemo'
import MessageTableDemo from './MessageTableDemo'

import { Picker } from 'emoji-mart'
import EmojiPicker from 'emojione-picker'


class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     hello: 'world'
  //   }
  // }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="logo" />
          <h2>CC</h2>
          <EmojiPicker onChange={function (data) {
            console.log("Emoji chosen", data);
          }} />
        </div>
        <div className="App-intro">
          <ContactsDemo />
          <AvatarDemo />
          <MessageTableDemo />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import ContactsDemo from './ContactsDemo'
import AvatarDemo from './AvatarDemo'
import MessageTableDemo from './MessageTableDemo'

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

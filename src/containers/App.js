import React from 'react';
import { observer, inject } from 'mobx-react'

import './App.css';

class App extends React.Component {

  setSubject = () => {
    // console.log('set')
    this.props.store.setSubject([
      {Name: 'bla', Description: 'bla bla'},
      {Name: 'lol', Description: 'lol lol'},
    ])

  }

  getSubject = () => {
    // console.log('get')
    let subject = this.props.store.getSubject
    console.log(subject)
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <button onClick={this.setSubject}>setSubject</button>
        <button onClick={this.getSubject}>getSugject</button>
      </div>
    )
  }
}

export default inject('store')(observer(App));

import React from 'react';
import { observer, inject } from 'mobx-react'
import { MDBBtn } from 'mdbreact'

import './App.css';
import Modal from '../components/Modal'

class App extends React.Component {
  state = {
    isModalOpen: false
  }

  createSubject = (form) => {
    this.props.store.createSubject(form)
    this.toggleModal()
  }

  editSubject = () => {

  }

  getSubjects = () => {
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My diary</h1>
        <MDBBtn onClick={this.toggleModal}>Create</MDBBtn>
        {this.state.isModalOpen ?
          <Modal
            toggle={this.toggleModal}
            handleSubmit={this.createSubject}
          /> : null
        }

      </div>
    )
  }
}

export default inject('store')(observer(App));

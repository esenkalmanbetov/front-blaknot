import React from 'react';
import { observer, inject } from 'mobx-react'
import { MDBBtn } from 'mdbreact'

import './App.css';
import Modal from '../components/Modal'
import Card from '../components/Card'

class App extends React.Component {
  state = {
    isModalOpen: false
  }

  componentDidMount() {
    this.getAllSubjects()
  }

  getAllSubjects = () => {
    this.props.store.getAllSubjects()
  }

  createSubject = (form) => {
    this.props.store.createSubject(form)
    this.toggleModal()
  }

  editSubject = () => {

  }

  get Subjects() {
    return this.props.store.getSubjects
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }


  render() {
    console.log('render; ', this.Subjects)
    return (
      <div className="App">
        <h1>My diary</h1>
        <MDBBtn onClick={this.toggleModal} size="sm">Create</MDBBtn>
        {this.state.isModalOpen ?
          <Modal
            toggle={this.toggleModal}
            handleSubmit={this.createSubject}
          /> : null
        }

        {this.Subjects.map(subject => {
          return (
            <Card
              key={subject.id}
              subject={subject}
            />
          )
        })}

      </div>
    )
  }
}

export default inject('store')(observer(App));

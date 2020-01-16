import React from 'react';
import { observer, inject } from 'mobx-react'
import { MDBBtn } from 'mdbreact'

import './App.css';
import Modal from '../components/Modal'
import Card from '../components/Card'
import Search from '../components/Search'

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

  get Subjects() {
    return this.props.store.getSubjects
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
        <Search />
        <MDBBtn
          onClick={this.toggleModal}
          size="sm"
        >
          Create</MDBBtn>
        {this.state.isModalOpen ?
          <Modal
            toggle={this.toggleModal}
            handleSubmit={this.createSubject}
          /> : null
        }

        {this.Subjects.map((subject, idx) => {
          return (
            <Card
              key={subject.id + idx}
              subject={subject}
            />
          )
        })}

      </div>
    )
  }
}

export default inject('store')(observer(App));

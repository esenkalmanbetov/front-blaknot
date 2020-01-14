import React, { Component } from 'react';
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
} from 'mdbreact';

import FormPage from './Form'

class Modal extends Component {
  state = {
    modal: true
  }

  toggle = () => this.props.toggle()

  handleSubmit = (form) => this.props.handleSubmit(form)

  render() {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            <FormPage
              onSave={this.handleSubmit}
              onCancel={this.toggle}
              subject={this.props.subject}
            />
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default Modal;
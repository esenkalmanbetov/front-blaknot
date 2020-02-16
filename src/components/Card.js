import React from 'react';
import { inject, observer } from 'mobx-react'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from 'mdbreact';

import Modal from './Modal'

class Card extends React.Component {

  state = {
    isModalOpen: false
  }

  editSubject = (form) => {
    // this.props.store.editSubject(this.props.subject.id, form)
    this.props.editSubject(this.props.subject.id, form)
    this.toggleModal()
  }
  deleteSubject = () => {
    this.props.store.deleteSubject(this.props.subject.id)
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  render() {
    const { subject } = this.props
    return (
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardBody>
            <MDBCardTitle>{subject.Title}</MDBCardTitle>
            <MDBCardText>
              {subject.Description}
            </MDBCardText>
            {/* <MDBCardText small muted>
              Created: {subject.CreatedDate}
            </MDBCardText>
            {subject.UpdatedDate ?
              <MDBCardText small muted>
                Updated: {subject.UpdatedDate}
            </MDBCardText> : null
            } */}
            <MDBBtn onClick={this.toggleModal} size='sm'>Edit</MDBBtn>
            <MDBBtn onClick={this.deleteSubject} size='sm'>Delete</MDBBtn>
          </MDBCardBody>
          {this.state.isModalOpen ?
            <Modal
              toggle={this.toggleModal}
              handleSubmit={this.editSubject}
              subject={subject}
            /> : null
          }
        </MDBCard>
      </MDBCol>
    )
  }
}

export default inject('store')(observer(Card));
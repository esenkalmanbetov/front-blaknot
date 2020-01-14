import React from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from 'mdbreact';

const Card = (props) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>{props.subject.Title}</MDBCardTitle>
          <MDBCardText>
            {props.subject.Description}
          </MDBCardText>
          <MDBCardText small muted>
            Created: {props.subject.CreatedDate}
          </MDBCardText>
          {props.subject.UpdatedDate ?
            <MDBCardText small muted>
              Updated:
            </MDBCardText> : null
          }
          <MDBBtn href="#" size='sm'>Edit</MDBBtn>
          <MDBBtn href="#" size='sm'>Delete</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Card;
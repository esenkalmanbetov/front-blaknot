import React from "react";
import { MDBCol, MDBBtn } from "mdbreact";

class FormsPage extends React.Component {

  constructor(props){
    super(props)

    const initialTitle = this.props.subject ? this.props.subject.Title : ''
    const initialDesc = this.props.subject ? this.props.subject.Description : ''

    this.state = {
      Title: initialTitle,
      Description: initialDesc
    };  
  }

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    this.props.onSave({
      Title: this.state.Title,
      Description: this.state.Description
    })
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBCol className="mb-3">
            <label
              htmlFor="defaultFormRegisterNameEx"
              className="grey-text"
            >
              Title
              </label>
            <input
              value={this.state.Title}
              name="Title"
              onChange={this.changeHandler}
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Title"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </MDBCol>

          <MDBCol className="mb-3">
            <label
              htmlFor="defaultFormRegisterPasswordEx4"
              className="grey-text"
            >
              Description
              </label>
            <textarea
              value={this.state.Description}
              onChange={this.changeHandler}
              type="textarea"
              id="defaultFormRegisterPasswordEx4"
              className="form-control"
              name="Description"
              placeholder="Description"
              required
            />
            <div className="invalid-feedback">
              Please provide a valid Description.
              </div>
            <div className="valid-feedback">Looks good!</div>
          </MDBCol>
          <MDBBtn color="primary" type="submit">
            Save
          </MDBBtn>
          <MDBBtn
            onClick={this.props.onCancel}
            color="secondary"
          >
            Cancel
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default FormsPage;
import React from "react";
import { MDBCol, MDBBtn } from "mdbreact";
import { observer, inject } from 'mobx-react'

class Search extends React.Component {

  state = {
    searchText: ''
  }

  searchSubject = () => {
    this.props.store.searchSubject(this.state.searchText)
  }

  changeHandler = event => {
    this.setState({ searchText: event.target.value })
  }

  render() {
    return (
      <MDBCol md="6">
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={this.changeHandler}
        />
        <MDBBtn
          gradient="aqua"
          rounded
          size="sm"
          type="submit"
          className="mr-auto"
          onClick={this.searchSubject}
        >
          Search
        </MDBBtn>
      </MDBCol>
    );
  }
}

export default inject('store')(observer(Search));
import React from "react";
import { observer, inject } from "mobx-react";
import { MDBBtn } from "mdbreact";

import "./App.css";
import Modal from "../components/Modal";
import Card from "../components/Card";
import Search from "../components/Search";

class App extends React.Component {
  state = {
    isModalOpen: false,
    list: []
  };

  componentDidMount() {
    this.getAllSubjects();
  }

  getAllSubjects = () => {
    this.props.store.getAllSubjects();
  };

  createSubject = form => {
    //SERVER
    // this.props.store.createSubject(form)
    const list = this.state.list;
    if (!list.length) {
      form.id = 1;
    } else {
      let lastId = list[list.length - 1].id;
      form.id = lastId + 1;
    }
    let tempList = [...this.state.list];
    tempList.push(form);
    this.setState({ list: tempList });
    this.toggleModal();
  };

  editSubject = (id, form) => {
    // console.log(id, form);
    let tempList = [...this.state.list];
    tempList.forEach(subject => {
      if (subject.id === id) {
        subject.Title = form.Title;
        subject.Description = form.Description;
      }
    });

    this.setState({ list: tempList });
  };

  get Subjects() {
    return this.props.store.getSubjects;
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  render() {
    return (
      <div className="App">
        <h1>My diary</h1>
        <Search />
        <MDBBtn onClick={this.toggleModal} size="sm">
          Create
        </MDBBtn>
        {this.state.isModalOpen ? (
          <Modal toggle={this.toggleModal} handleSubmit={this.createSubject} />
        ) : null}

        {this.state.list.map((subject, idx) => {
          return (
            <Card
              key={subject.id + idx}
              subject={subject}
              editSubject={this.editSubject}
            />
          );
        })}
      </div>
    );
  }
}

export default inject("store")(observer(App));

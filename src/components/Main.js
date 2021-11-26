import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import ContactList from './ContactList';
import Formular from './Formular';
import { v4 as uuidv4 } from 'uuid';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      formData: {
        gender: '',
        name: '',
        age: '',
        date: '',
        country: ''
      },
      contactList: []
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      contactList: [
        ...this.state.contactList,
        { ...this.state.formData, id: uuidv4() }
      ]
    });
  };

  handleChange = (e) => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value }
    });
  };

  handleDelete = (id) => {
    this.setState({
      contactList: this.state.contactList.filter((contact) => contact.id !== id)
    });
  };

  render() {
    return (
      <>
        <Contact
          data={{
            contact: this.state.contactList.at(-1),
            lastAdded: true
          }}
        />
        <Formular
          data={{
            formData: this.state.formData,
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange
          }}
        />
        <Contact data={{ contact: this.state.formData, preview: true }} />
        <ContactList
          data={{
            contactList: this.state.contactList,
            handleDelete: this.handleDelete
          }}
        />
      </>
    );
  }
}

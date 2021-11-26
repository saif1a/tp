import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import ContactList from './ContactList';
import Formular from './Formular';
import { v4 as uuidv4 } from 'uuid';

export default function MainFunction(props) {
  const [contactList, setContactList] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});

  const [formData, setFormData] = useState({
    gender: '',
    name: '',
    age: '',
    date: '',
    country: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactList((l) => [...contactList, { ...formData, id: uuidv4() }]);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Contact data={{ contact: contactList.at(-1), lastAdded: true }} />
      <Formular data={{ formData, handleSubmit, handleChange }} />
      <Contact data={{ contact: formData, preview: true }} />
      <ContactList data={{ contactList }} />

      {/* <LastAdded data={{ latestContact: contactList.at(-1) }} /> */}
      {/* <Preview data={formData} /> */}
      {/* <Contact selectedContact={selectedContact} /> */}
    </>
  );
}

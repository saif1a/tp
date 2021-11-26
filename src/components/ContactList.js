import React from 'react';
import Contact from './Contact';

export default function ContactList(props) {
  const { contactList, handleDelete } = props.data;
  return (
    <>
      <h3>Contact List</h3>
      {contactList.map((contact) => (
        <Contact
          data={{ contact, contactRow: true, handleDelete: handleDelete }}
        />
      ))}
    </>
  );
}

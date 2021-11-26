import React from 'react';

export default function Contact(props) {
  const { contact, preview, contactRow, lastAdded, handleDelete } = props.data;
  // console.log(handleDelete);

  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          {(contactRow || preview) && (
            <>
              <th>Age</th>
              <th>Dream Country</th>
              <th>Gender</th>
              <th>Date</th>
            </>
          )}
        </tr>
        <tr>
          <td>{contact?.id}</td>
          <td>{contact?.name}</td>
          {(contactRow || preview) && (
            <>
              <td>{contact?.age}</td>
              <td>{contact?.country}</td>
              <td>{contact?.gender}</td>
              <td>{contact?.date}</td>
            </>
          )}
        </tr>
      </table>
      {contactRow && (
        <button
          onClick={() => {
            handleDelete(contact?.id);
          }}
        >
          Delete
        </button>
      )}
    </>
  );
}

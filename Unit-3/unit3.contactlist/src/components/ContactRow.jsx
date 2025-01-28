import React from "react";

function ContactRow({ contact, setFeaturedUser }) {
  console.log(contact);
  return (
    <tr onClick={() => setFeaturedUser(contact.id)}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

export default ContactRow;

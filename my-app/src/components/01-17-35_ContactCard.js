import React from 'react';

// Components will be given an object containing custom properties that comes from component call.
// This basically behaves like function paremeter.
// function ContactCard({ imgUrl, name, phone, email }) {
//   return (
//     <div className="contact-card">
//       <div className="contact-card__image">
//         <img src={imgUrl} alt={name} />
//       </div>

//       <div className="contact-card__details">
//         <h1>{name}</h1>
//         <p>Phone: {phone}</p>
//         <p>Email: {email}</p>
//       </div>
//     </div>
//   );
// }

// An alternative component function to receive a JSON-like file.
function ContactCard(props) {
  const { imgUrl, name, phone, email } = props.contact;
  return (
    <div className="contact-card">
      <div className="contact-card__image">
        <img src={imgUrl} alt={name} />
      </div>

      <div className="contact-card__details">
        <h1>{name}</h1>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}

export default ContactCard;

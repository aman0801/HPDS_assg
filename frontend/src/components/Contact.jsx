import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us for any inquiries or assistance.</p>
      <div className="contact-info">
        <h3>Email:</h3>
        <p>contact@example.com</p>
        <h3>Phone:</h3>
        <p>+1234567890</p>
        <h3>Address:</h3>
        <p>123 Main Street, City, Country</p>
      </div>
    </div>
  );
};

export default Contact;

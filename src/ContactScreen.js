// src/ContactScreen.js
import React from 'react';
import './ContactScreen.css'; // Import the CSS file for styling

export default function ContactScreen() {
  return (
    <div className="center-wrapper">
      <div className="container">
        <h1 className="text">Contact Us</h1>
        <p className="description">Fill this out and we'll contact you in 24-48 business hours.</p>
        <form className="contact-form">
          <input type="text" className="input" placeholder="Preferred Name" required />
          <input type="text" className="input" placeholder="Business Name" required />
          <input type="email" className="input" placeholder="Email Address" required />
          <input type="tel" className="input" placeholder="Phone" required />
          <input type="text" className="input" placeholder="Business Information (e.g. Gas Station, Restaurant)" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

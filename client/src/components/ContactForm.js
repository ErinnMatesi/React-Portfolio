import React, { useState } from 'react';
// importing validator to use for email validation
import validator from 'validator';

export default function Contact() {
  // first set up state for the form
  const [status, setStatus] = useState('Send');
  // set up state for the email to use for validation
  const [emailError, setEmailError] = useState('');

  // handles form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // validates email input
    const validateEmail = (event) => {
      let email = event.target.value
    
      if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
      } else {
        setEmailError('Enter valid Email!')
      }
    };

    setStatus('Sending email...');
    // setting up the values that will be pulled from the form
    const { name, email, message } = event.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    // this will send the email (using nodemailer)
    try {
      let response = await fetch('https://erinnmatesi.herokuapp.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(details),
      });
      setStatus('Send');
      let result = await response.json();
      alert(result.status);
    } catch (error) {
      console.log(error);
      alert('something went wrong!');
    }
    
  };
  return (
    <div>
      <section id="emailMe">
        <h2>Send me an email at:</h2>
        <h3 id="email">erinnmatesi@gmail.com</h3>
        <br></br>
        <h3 id="invitation">Or reach out using the form below!</h3>
      </section>
      <form className="contactForm" onSubmit={handleSubmit}>
        <section className="formWrapper">
          <div className="inputWrapper">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div className="inputWrapper">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="inputWrapper">
            <label htmlFor="message">Message:</label>
            <textarea id="message" required />
          </div>
          <button className="formButton"type="submit">{status}</button>
        </section>
      </form>
    </div>
  );
};
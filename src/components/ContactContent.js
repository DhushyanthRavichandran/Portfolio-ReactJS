import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactContent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_26d7lj1', 'template_mhf8tbs', form.current, 'G-K7G5YYto4yBbIlK')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-content">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="from_name" className="input-field" placeholder="Name" required />
        <input type="email" name="to_name" className="input-field" placeholder="Email" required />
        <textarea name="message" className="input-field textarea" placeholder="Message" required></textarea>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

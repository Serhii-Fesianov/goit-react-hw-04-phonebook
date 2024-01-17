import React, { useState } from 'react';
import s from './ContactForm.module.css';

export const ContactForm = ({ handleAddContact }) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    number: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact(contactForm);
    setContactForm({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={s.styleForm}>
      <p className={s.styleName}>Name</p>
      <input
        type="text"
        required
        onChange={handleChange}
        name="name"
        value={contactForm.name}
        className={s.styleInput}
      />
      <p className={s.styleNumber}>Number</p>
      <input
        type="tel"
        name="number"
        required
        onChange={handleChange}
        value={contactForm.number}
        className={s.styleInput}
      />
      <button type="submit" className={s.styleButton}>
        Add contact
      </button>
    </form>
  );
};

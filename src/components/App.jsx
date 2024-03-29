import React, { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import s from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('CONTACTS_DATA')) || [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('CONTACTS_DATA', JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteContacts = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  const handleAddContact = ({ name, number }) => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert('already exist');
      return;
    }
    const newObject = {
      name,
      id: nanoid(),
      number,
    };
    setContacts(prevState => [...prevState, newObject]);
  };

  const handleChangeFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1 className={s.headText}>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <h2 className={s.headText}>Contacts</h2>
      <Filter handleChangeFilter={handleChangeFilter} />
      <ContactList
        contacts={getFilteredContacts()}
        handleDeleteContacts={handleDeleteContacts}
      />
    </div>
  );
};

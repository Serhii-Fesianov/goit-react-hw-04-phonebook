import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import s from './App.module.css';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(
      window.localStorage.getItem('CONTACTS_DATA')
    );

    if (parsedContacts?.length) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      window.localStorage.setItem(
        'CONTACTS_DATA',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  handleDeleteContacts = id => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== id),
    });
  };

  handleAddContact = ({ name, number }) => {
    const isExist = this.state.contacts.find(
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
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newObject],
    }));
  };

  handleChangeFilter = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1 className={s.headText}>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />
        <h2 className={s.headText}>Contacts</h2>
        <Filter handleChangeFilter={this.handleChangeFilter} />
        <ContactList
          contacts={filteredContacts}
          handleDeleteContacts={this.handleDeleteContacts}
        />
      </div>
    );
  }
}

import React, { Component } from 'react';
import s from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    filter: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleAddContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.styleForm}>
        <p className={s.styleName}>Name</p>
        <input
          type="text"
          required
          onChange={this.handleChange}
          name="name"
          value={this.state.name}
          className={s.styleInput}
        />
        <p className={s.styleNumber}>Number</p>
        <input
          type="tel"
          name="number"
          required
          onChange={this.handleChange}
          value={this.state.number}
          className={s.styleInput}
        />
        <button type="submit" className={s.styleButton}>
          Add contact
        </button>
      </form>
    );
  }
}

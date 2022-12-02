import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Box } from './Box/Box'; 

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    let isName = false;
    const { contacts } = this.state;
    contacts.map(({ name }) => {
      if (contact.name === name) {
        alert(`${contact.name} is already in contacts`);
        isName = true;
        return;
      }
    });
    if (!isName) {
      contact.id = nanoid();
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    return filterContacts;
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  }

  render() {
    const { filter } = this.state;
    const changeFilter = this.onChangeFilter;
    const filterContacts = this.visibleContacts();
    const deleteContact = this.deleteContact;
    return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter onSearch={changeFilter} value={filter} />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={deleteContact}
        />
      </Box>
    );
  }
}

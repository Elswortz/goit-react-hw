import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
      if (parsedContacts) {
        setContacts(parsedContacts);
      }
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const ContactAlreadyExist = contacts.some(item => item.name === name);
    if (ContactAlreadyExist) {
      alert('This contact already exist!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = filterContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={addContact} />
      {contacts.length > 0 && (
        <Filter value={filter} onFilterChange={onFilterChange} />
      )}
      <ContactList
        contacts={filteredContacts}
        onDeleteBtnClick={deleteContact}
      />
    </>
  );
};

export default App;

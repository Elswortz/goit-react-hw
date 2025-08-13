import { filterContacts } from '../../store/Contacts/slice';
import {
  getContactsThunk,
  addContactsThunk,
  deleteContactsThunk,
} from '../../store/Contacts/thunks';
import { selectContacts } from '../../store/Contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import { useEffect } from 'react';

const PhoneBook = () => {
  const { items: contacts, isLoading, error, filter } = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const addNewContact = ({ name, phone }) => {
    const ContactAlreadyExist = contacts.some(item => item.name === name);
    if (ContactAlreadyExist) {
      alert('This contact already exist!');
      return;
    }

    const newContact = {
      name,
      phone,
    };

    dispatch(addContactsThunk(newContact));
  };

  const deleteContactById = contactId => {
    dispatch(deleteContactsThunk(contactId));
  };

  const getFilterContacts = () => {
    if (!contacts) return [];
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  };

  const onFilterChange = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  const filteredContacts = getFilterContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={addNewContact} />
      {contacts?.length > 0 && <Filter value={filter} onFilterChange={onFilterChange} />}
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Error</h2>}
      {contacts?.length > 0 && (
        <ContactList contacts={filteredContacts} onDeleteBtnClick={deleteContactById} />
      )}
    </>
  );
};

export default PhoneBook;

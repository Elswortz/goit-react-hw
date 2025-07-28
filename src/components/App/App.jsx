import {
  addContact,
  deleteContact,
  filterContacts,
} from '../../store/phonebook/phoneBookSlice';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import './App.css';

const App = () => {
  const { contacts, filter } = useSelector(state => state.phonebook);
  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  // const isFirstRender = useRef(true);

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //     if (parsedContacts) {
  //       setContacts(parsedContacts);
  //     }
  //     isFirstRender.current = false;
  //     return;
  //   }
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const addNewContact = ({ name, number }) => {
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

    dispatch(addContact(newContact));

    // setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContactById = contactId => {
    // setContacts(prevContacts =>
    //   prevContacts.filter(contact => contact.id !== contactId)
    // );
    dispatch(deleteContact(contactId));
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onFilterChange = e => {
    dispatch(filterContacts(e.currentTarget.value));
    // setFilter(e.currentTarget.value);
  };

  const filteredContacts = getFilterContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={addNewContact} />
      {contacts.length > 0 && (
        <Filter value={filter} onFilterChange={onFilterChange} />
      )}
      <ContactList
        contacts={filteredContacts}
        onDeleteBtnClick={deleteContactById}
      />
    </>
  );
};

export default App;

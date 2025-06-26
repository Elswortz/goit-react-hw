function ContactList({ contacts, onDeleteBtnClick }) {
  return (
    <ul className="contacts">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="contactItem">
          {name} {number}{' '}
          <button type="button" onClick={() => onDeleteBtnClick(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

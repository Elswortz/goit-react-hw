import css from './ContactList.module.css';

function ContactList({ contacts, onDeleteBtnClick }) {
  return (
    <ul className={css.list}>
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

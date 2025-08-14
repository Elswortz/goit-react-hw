import css from './ContactList.module.css';

function ContactList({ contacts, onDeleteBtnClick }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <div>
            <p>Fullname: {name}</p>
            <p>Phone: {number}</p>
          </div>
          <button className={css.btn} type="button" onClick={() => onDeleteBtnClick(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

import { useState } from 'react';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onChangeHandler = e => {
    setValue(e.currentTarget.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <>
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={onSubmitHandler}>
          <button type="submit" className={css.button}>
            <span className="button-label">Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            value={value}
            autoFocus
            placeholder="Search images and photos"
            onChange={onChangeHandler}
          />
        </form>
      </header>
    </>
  );
};

export default Searchbar;

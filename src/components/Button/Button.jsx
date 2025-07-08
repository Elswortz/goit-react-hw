import css from './Button.module.css';

function Button({ onClick }) {
  return (
    <button className={css.btn} type="button" onClick={onClick}>
      Load more
    </button>
  );
}

export default Button;

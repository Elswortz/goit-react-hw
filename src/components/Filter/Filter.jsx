import css from './Filter.module.css';

function Filter({ value, onFilterChange }) {
  return (
    <label className={css.label}>
      Filter by Name:
      <input className="" type="text" value={value} onChange={onFilterChange} />
    </label>
  );
}

export default Filter;

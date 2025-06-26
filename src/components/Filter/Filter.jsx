function Filter({ value, onFilterChange }) {
  return (
    <label>
      Filter by Name:
      <input className="" type="text" value={value} onChange={onFilterChange} />
    </label>
  );
}

export default Filter;

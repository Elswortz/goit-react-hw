import { useState, useEffect } from 'react';
import { NavLink, useSearchParams, useLocation } from 'react-router';
import * as API from '../../services/movies-api';
import css from './MoviesFilter.module.css';

function MoviesFilter() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') return;
    fetchSearchMovies(searchQuery);
  }, [searchQuery]);

  const UpdateQueryString = event => {
    event.preventDefault();
    const queryValue = event.target.elements.search.value;
    console.dir(queryValue);
    if (queryValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: queryValue });
  };

  const fetchSearchMovies = async searchQuery => {
    try {
      setIsLoading(true);
      const data = await API.getMovies(searchQuery);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className={css.form} onSubmit={UpdateQueryString}>
        <input className={css.input} type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MoviesFilter;

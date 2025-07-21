import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import * as API from '../../services/movies-api';
import css from './TrendingMovies.module.css';

function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    fetchTendingMovies();
  }, []);

  const fetchTendingMovies = async () => {
    try {
      setIsLoading(true);
      const data = await API.getTendingMovies();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 className={css.title}>Tranding Today</h1>
      {isLoading && <div>Loading...</div>}
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`movies/${id}`} state={{ from: location }}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TrendingMovies;

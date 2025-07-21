import { NavLink, useParams, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import * as API from '../../services/movies-api';
import css from './MovieOverview.module.css';

function MovieOverview() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    fetchMovieById(movieId);
  }, [movieId]);

  const fetchMovieById = async movieId => {
    try {
      setIsLoading(true);
      const data = await API.getMovieById(movieId);
      setMovie(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!movie) {
    return isLoading ? <div>Loading...</div> : <div>No movie data</div>;
  }

  const { poster_path, title, vote_average, overview, genres } = movie;
  return (
    <>
      {isLoading && <div>Loading...</div>}
      <NavLink to={backLinkHref}>← Go back</NavLink>
      <div className={css.wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <div>
          <h2>{title}</h2>
          <p>User score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres:</h3>
          <ul className={css.genresList}>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
          <ul className={css.navList}>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MovieOverview;

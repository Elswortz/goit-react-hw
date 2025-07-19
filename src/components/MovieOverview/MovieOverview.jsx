import { NavLink, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as API from '../../services/movies-api';

function MovieOverview() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      <button type="button">Go back</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <div>
          <h2>{title}</h2>
          <p>User score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h2>Genres:</h2>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
    </>
  );
}

export default MovieOverview;

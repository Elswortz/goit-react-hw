import { NavLink, Outlet } from 'react-router';
import MovieOverview from '../components/MovieOverview/MovieOverview';

function MovieDetails() {
  return (
    <>
      <MovieOverview />
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default MovieDetails;

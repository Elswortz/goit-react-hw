import { NavLink, Outlet } from 'react-router';
import MovieOverview from '../components/MovieOverview/MovieOverview';

function MovieDetails() {
  return (
    <>
      <MovieOverview />
      <Outlet />
    </>
  );
}

export default MovieDetails;

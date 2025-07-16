import { NavLink, Outlet } from 'react-router';

function MovieDetails() {
  return (
    <>
      <div>Movie Details</div>
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

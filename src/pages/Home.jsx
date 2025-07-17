import { NavLink } from 'react-router';
import * as API from '../services/movies-api';

function Home() {
  async function fetchMovies() {
    const data = await API.getMovieCredits(1087192);
    console.log(data);
  }
  fetchMovies();

  return (
    <>
      <h1>Tranding Today</h1>
      <div>
        <NavLink to="/movies/1">Film1</NavLink>
      </div>
      <div>
        <NavLink to="/movies/2">Film2</NavLink>
      </div>
      <div>
        <NavLink to="/movies/3">Film3</NavLink>
      </div>
    </>
  );
}

export default Home;

import { NavLink } from 'react-router';

function Home() {
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

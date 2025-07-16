import { NavLink, Outlet } from 'react-router';

function Layout() {
  return (
    <>
      <header>
        <div className="logo">Logo</div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default Layout;

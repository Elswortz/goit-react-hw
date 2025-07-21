import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router';
import css from './Layout.module.css';

function Layout() {
  return (
    <>
      <header className={css.header}>
        <div className={css.logo}>Logo</div>
        <nav>
          <ul className={css.navlist}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;

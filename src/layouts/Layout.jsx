import { NavLink, Outlet } from 'react-router';
import NavMenu from '../components/NavMenu/NavMenu';
import AuthBar from '../components/AuthBar/AuthBar';
import UserMenu from '../components/UserMenu/UserMenu';
import css from './Layout.module.css';
import { useAuth } from '../hooks/useAuth';

function Layout() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <div className={css.logo}>Phonebook</div>
          <NavMenu />
          {isLoggedIn ? <UserMenu /> : <AuthBar />}
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;

import { NavLink } from 'react-router';
import css from './NavMenu.module.css';
import { useAuth } from '../../hooks/useAuth';

const NavMenu = () => {
  const { isLoggedIn } = useAuth();
  return (
    <ul className={css.mainMenu}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavMenu;

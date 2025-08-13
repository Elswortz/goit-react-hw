import { NavLink } from 'react-router';
import css from './NavMenu.module.css';

const NavMenu = () => {
  return (
    <ul className={css.mainMenu}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
    </ul>
  );
};

export default NavMenu;

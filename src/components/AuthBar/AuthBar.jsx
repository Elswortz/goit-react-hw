import { NavLink } from 'react-router';
import css from './AuthBar.module.css';

const AuthBar = () => {
  return (
    <ul className={css.authMenu}>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );
};

export default AuthBar;

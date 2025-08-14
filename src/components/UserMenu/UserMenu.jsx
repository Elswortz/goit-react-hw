import { logOut } from '../../store/Auth/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div className={css.container}>
      <p>Welcome, {user.name}!</p>
      <button className={css.btn} type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

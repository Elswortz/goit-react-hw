import { useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn, selectisRefreshing } from '../store/Auth/selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectisRefreshing),
    user: useSelector(selectUser),
  };
};

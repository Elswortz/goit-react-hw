import { Routes, Route } from 'react-router';

import Home from '../../pages/Home';
import Contacts from '../../pages/Contacts';
import Register from '../../pages/Register';
import Login from '../../pages/Login';
import Layout from '../../layouts/Layout';

import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from '../../store/Auth/operations';
import { useAuth } from '../../hooks/useAuth';

import { RestrictedRoute } from '../../utils/RestrictedRoute';
import { PrivateRoute } from '../../utils/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
        <Route path="register" element={<RestrictedRoute component={Register} />} />
        <Route path="login" element={<RestrictedRoute component={Login} />} />
      </Route>
    </Routes>
  );
};

export default App;

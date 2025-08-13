import { Routes, Route } from 'react-router';

import Home from '../../pages/Home';
import Contacts from '../../pages/Contacts';
import Register from '../../pages/Register';
import Login from '../../pages/Login';
import Layout from '../../layouts/Layout';

import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

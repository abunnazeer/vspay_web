import React, { Fragment } from 'react';

import HomePage from './pages/HomePage';
import Business from './pages/Business';
import Resources from './pages/Resources';
import Supports from './pages/Supports';

import { Route, Routes } from 'react-router-dom';
import Register from './pages/users/Register';
import Login from './pages/users/Login';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="business" element={<Business />} />
        <Route path="resources" element={<Resources />} />
        <Route path="supports" element={<Supports />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Fragment>
  );
}

export default App;

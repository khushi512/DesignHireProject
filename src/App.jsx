// This is a simple React application that uses React Router for navigation.
// It includes a Navbar component and four pages: Home, Login, Browse, and Saved.
// The Navbar component contains links to each of these pages.

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Browse from './pages/Browse';
import Saved from './pages/Saved';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </div>
    </>
  );
};

export default App;


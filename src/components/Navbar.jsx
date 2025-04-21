import React from 'react';
import { Link } from 'react-router-dom';
import { useDesigners } from '../context/DesignersContext';

const Navbar = () => {
  const { user, logoutUser } = useDesigners(); // Get user and logout function from context

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          DesignHire
        </Link>
      </div>

      <div className="navbar-right">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/browse">Browse</Link></li>
          <li><Link to="/saved">Saved</Link></li>
        </ul>

        <div className="auth-info">
          {user ? (
            <>
              <span>Welcome, {user.name}!</span>
              <button onClick={logoutUser}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// This Navbar component is a functional component that uses React Router's Link component for navigation.
// It also uses a custom context (useDesigners) to manage user authentication state.
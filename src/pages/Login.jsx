import React, { useState } from 'react';
import { useDesigners } from '../context/DesignersContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false); // Track if it's a signup form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser, signupUser } = useDesigners();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      // Handle signup
      signupUser(name, email, password);
      navigate('/browse'); // Redirect after successful signup
    } else {
      // Handle login
      loginUser(email, password);
      navigate('/browse'); // Redirect after successful login
    }
  };

  return (
    <div className="login-form">
      <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
      </form>

      <p>
        {isSignup ? 'Already have an account? ' : "Don't have an account? "}
        <span onClick={() => setIsSignup(!isSignup)} style={{ cursor: 'pointer', color: 'blue' }}>
          {isSignup ? 'Login' : 'Sign Up'}
        </span>
      </p>
    </div>
  );
};

export default Login;
// This code defines a Login component that allows users to either log in or sign up. It uses the DesignersContext to manage user authentication and redirects the user to the browse page after successful login or signup. The form dynamically changes based on whether the user is signing up or logging in.
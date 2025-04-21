import React, { createContext, useContext, useState } from 'react';

// Create context
const DesignersContext = createContext();

// Custom hook to use the context
export const useDesigners = () => useContext(DesignersContext);

// Provider component
export const DesignersProvider = ({ children }) => {
  const [savedDesigners, setSavedDesigners] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null); // Get user data from localStorage

  // Function to save a designer
  const saveDesigner = (designer) => {
    if (user) {
      setSavedDesigners((prev) => [...prev, designer]);
    } else {
      alert('Please log in to save designers!');
    }
  };

  // Function to log in a user
  const loginUser = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = storedUser.find((user) => user.email === email && user.password === password);
    
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser)); // Save the logged-in user to localStorage
    } else {
      alert('Invalid email or password!');
    }
  };

  // Function to sign up a new user
  const signupUser = (name, email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if user already exists
    const userExists = storedUsers.some((user) => user.email === email);
    
    if (userExists) {
      alert('User already exists!');
      return;
    }

    const newUser = { name, email, password };
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers)); // Save users to localStorage

    // Log in the user after successful signup
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser)); // Set logged-in user to localStorage
  };

  // Function to log out the user
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user from localStorage
  };

  return (
    <DesignersContext.Provider
      value={{ savedDesigners, saveDesigner, user, loginUser, signupUser, logoutUser }}
    >
      {children}
    </DesignersContext.Provider>
  );
};
// This code defines a context for managing designers in a React application. It includes functions for saving designers, logging in, signing up, and logging out users. The context is designed to be used throughout the application, allowing components to access and modify the state of saved designers and user information easily. The use of localStorage ensures that user data persists across page refreshes.
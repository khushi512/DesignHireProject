import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DesignersProvider } from './context/DesignersContext'; // Import provider
import App from './App';
import './styles/global.css';
import './styles/components.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DesignersProvider>
        <App />
      </DesignersProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// This code sets up the main entry point for a React application. It uses React Router for routing and a custom context provider for managing global state related to designers. The global and component-specific styles are also imported here.
// The main App component is rendered inside a BrowserRouter and the DesignersProvider, allowing for routing and state management throughout the application.
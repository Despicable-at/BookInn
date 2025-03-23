import React from 'react';
import ReactDOM from 'react-dom/client';  // Changed this import
import App from './App';
import reportWebVitals from './reportWebVitals';

// This is for React 18+ rendering method
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

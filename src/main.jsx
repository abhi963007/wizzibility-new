import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Remove the loading class so the page fades in immediately after React mounts.
// This replaces the old Webflow visibility:hidden block that blocked the page
// until IX2 fully initialized (could take 1-3 seconds).
document.body.classList.remove('loading');


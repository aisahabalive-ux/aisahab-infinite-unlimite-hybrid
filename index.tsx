import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Extension hata diya hai

// Polyfill for process (Browser environment ke liye)
if (typeof (window as any).process === 'undefined') {
  (window as any).process = { env: {} };
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

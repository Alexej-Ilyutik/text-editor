import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export default root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

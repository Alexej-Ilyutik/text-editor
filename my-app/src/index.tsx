import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { App } from './components/app/App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export default root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

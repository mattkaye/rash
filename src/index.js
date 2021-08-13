import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import RashWebsite from './RashWebsite';
import './css/base.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <RashWebsite />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Roteador from './componentes/roteador';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Roteador />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

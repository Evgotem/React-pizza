import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './components';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


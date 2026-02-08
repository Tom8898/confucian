import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Test from './pages/test.jsx';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/arrival" element={<Test />} />
        <Route path="/living" element={<NotFound />} />
        <Route path="/education" element={<Test />} />
        <Route path="//education/school" element={<Test />} />
        <Route path="/faq" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
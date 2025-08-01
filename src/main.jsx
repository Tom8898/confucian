import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'; // 👈 你的位置可能不同

import './index.css'
import App from './App.jsx'
import NotFound from './pages/NotFound.jsx';




// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Home />
//     {/* <App /> */}
    
//     <li>asdfasdfsad</li>
//   </StrictMode>,
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/arrival" element={<NotFound />} />
        <Route path="/arrival" element={<NotFound />} />
        <Route path="/living" element={<NotFound />} />
        <Route path="/education" element={<NotFound />} />
        <Route path="/faq" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
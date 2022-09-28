import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {App} from './App';
import { Intro } from './components/Intro/Intro';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
       <Routes>

      <Route path="/" element={ <Intro /> } />
      <Route path="/presupuesto" element={ <App  /> } />

    </Routes>
    
  </React.StrictMode>
  
  </BrowserRouter>
);


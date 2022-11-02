import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Players from './pages/Players';
import Login from './pages/Login';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Players />} />
      <Route path='/players' element={<Players />} />

    </Routes>
    </BrowserRouter>
  );
}
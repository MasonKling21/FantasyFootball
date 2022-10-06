import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Players from './pages/Players';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/register' element={<Register />} />
      <Route path='/players' element={<Players />} />

    </Routes>
    </BrowserRouter>
  );
}

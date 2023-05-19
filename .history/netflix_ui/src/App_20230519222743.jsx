import React from 'react';
import  Login  from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;
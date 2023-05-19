import React from 'react';
import  Login  from './pages/Login';
import { BrowserRouter, Routes } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
    

        <Login />

    </BrowserRouter>
  );
};

export default App;
import React from 'react';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Login />
      </Routes>

    </BrowserRouter>
  );
};

export default App;
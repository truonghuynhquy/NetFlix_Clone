import React from 'react';
import {Login} from './pages';
import { BrowserRouter, Routes } from 'react-router-dom';


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
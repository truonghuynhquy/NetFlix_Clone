import React from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
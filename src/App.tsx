import React from 'react';
import Home from './Pages/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from 'Pages/Register';
import Login from 'Pages/Login';
import Main from 'Pages/Main';


function App() {
  return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path="/dashboard/*" element={<Main />} />
        </Routes>
  );
}

export default App;
import React from 'react';
import Home from './Pages/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from 'Pages/Register';
import Login from 'Pages/Login';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </ChakraProvider>
    
  );
}

export default App;
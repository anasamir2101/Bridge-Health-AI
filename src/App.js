import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Full_Dashboard from './components/Full_Dashboard';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Full_Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

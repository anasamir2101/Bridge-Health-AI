import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Full_Dashboard from './components/Full_Dashboard';
import Single_Dashboard from './components/Single_Dashboard';
import Chat from './components/Chat';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/full-dashboard' element={<Full_Dashboard />} />
        <Route
          path='/full-dashboard/:personId'
          element={<Single_Dashboard />}
        />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;

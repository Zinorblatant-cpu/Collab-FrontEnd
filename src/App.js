// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SalePage from './pages/SalePage';
import ClassPage from './pages/ClassPage';
import UserPage from './pages/UserPage';
import ConfigPage from './pages/ConfigPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/Sale" element={<SalePage />} />
        <Route path='/class' element={<ClassPage/>}/>
        <Route path='/user' element={<UserPage/>}/>
        <Route path='/config' element={<ConfigPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import HomeScreen from './HomeScreen';
import ContactScreen from './ContactScreen';
import Icon from './LockIcon';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <div className="navbar-logo">Safelock <Icon /></div>
          <nav className="navbar-links">
            <Link to="/">Home</Link>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <Link to="/contact">Contact Us</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
        </Routes>

        <footer>
          <p>&copy; Safelock Securities LLC. All rights reserved. </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WineInfoPage from './pages/WineInfoPage';
import ExploreWinesPage from './pages/ExploreWinesPage'; // Import the new page
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/wine-info" element={<WineInfoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/explore-wines" element={<ExploreWinesPage />} /> {/* Add this route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
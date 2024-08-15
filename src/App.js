import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Common/Navbar';

function App() {
  return (
    <Router>
      {/* Navbar is included outside of the Routes to ensure it appears on all pages */}
      <Navbar />

      {/* Routes component wraps all the Route components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;

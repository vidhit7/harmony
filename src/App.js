import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Questionnaire from './pages/Questionnaire'; 
import Dashboard from './pages/Dashboard';
import Navbar from './components/Common/Navbar';

function App() {
  return (
    <Router>
      {/* Navbar is included outside of the Routes to ensure it appears on all pages */}
      <Navbar />

      {/* Routes component wraps all the Route components */}
      <div className="pt-16"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/questionnaire" element={<Questionnaire />} /> {/* New route */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add other routes here as needed */}
      </Routes>
      </div>
    </Router>
  );
}

export default App;

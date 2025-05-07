// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Tech from './Components/Tech';
import Hero from './Components/Hero';

const App = () => {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;

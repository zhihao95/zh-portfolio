import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;

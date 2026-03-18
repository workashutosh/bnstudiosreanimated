import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GameDev from './pages/GameDev';
import ArchViz from './pages/ArchViz';
import VR from './pages/VR';
import WebApps from './pages/WebApps';
import ThreeDArt from './pages/ThreeDArt';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<GameDev />} />
          <Route path="/game-dev" element={<GameDev />} />
          <Route path="/arch-viz" element={<ArchViz />} />
          <Route path="/vr" element={<VR />} />
          <Route path="/vr" element={<VR />} />
          <Route path="/web-apps" element={<WebApps />} />
          <Route path="/3d-art" element={<ThreeDArt />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

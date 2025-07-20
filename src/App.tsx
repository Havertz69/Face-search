import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import UploadSection from './UploadSection.jsx';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">🔍</span>
          <span className="logo-text">FaceFinder</span>
          <span className="logo-subtext">Identity Verification System</span>
        </div>
        <div className="badge">⚠️ Research Use Only</div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="warning-tag">⚠️ Research & Educational Use Only</div>
        <h1 className="title">
          Social Media <span className="highlight">Face Search</span>
        </h1>
        <p className="subtitle">
          Advanced facial recognition system that searches across multiple social media platforms.
          Upload a photo to find matching profiles on Facebook, Instagram, Twitter, LinkedIn, and more.
        </p>

        {/* Feature icons */}
        <div className="features">
          <span>🔍 Cross-Platform Search</span>
          <span>📱 Social Media Integration</span>
          <span>🛡️ Privacy Compliant</span>
          <span>⚡ Real-Time Results</span>
        </div>

        {/* Upload Box */}
        <UploadSection />
        {/* Ethical Guidelines */}
        <div className="ethical-guidelines">
            <h3>⚠️ Ethical Use Guidelines</h3>
            <ul>
              <li>Only use with proper consent or for legitimate research</li>
              <li>Respect privacy and platform terms of service</li>
              <li>Verify results manually before taking action</li>
              <li>Use responsibly for security and identity verification</li>
            </ul>
          </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;

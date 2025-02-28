// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function HomePage() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h1 className="logo">CertifyChain / AercaudLedger</h1>
        <button className="connect-wallet-btn">Connect Wallet</button>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        <div className="card">
          <h2>Are you an institution or organization?</h2>
          <Link to="/institution" className="issue-btn">
            Issue now
          </Link>
        </div>

        <div className="card">
          <h2>Are you an employer or individual?</h2>
          {/* Link to the new /verify route */}
          <Link to="/verify" className="verify-btn">
            Verify Now
          </Link>
        </div>
      </main>
    </div>
  );
}

export default HomePage;

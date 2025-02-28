// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ConnectWallet from './WalletConnectButton';


/* --- Header Component (used across pages) --- */
function Header() {
  return (
    <header className="header">
      <h1 className="logo">CertifyChain / AcadLedger</h1>
      <ConnectWallet />
    </header>
  );
}

/* --- 1) Home Page Component --- */
function HomePage() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="card">
          <h2>Are you an institution or organization?</h2>
          <Link to="/institution" className="issue-btn">
            Issue now
          </Link>
        </div>
        <div className="card">
          <h2>Are you an employer or individual?</h2>
          <Link to="/verify" className="verify-btn">
            Verify Now
          </Link>
        </div>
      </main>
    </div>
  );
}

/* --- 2) Institution Portal Component --- */
function InstitutionPortal() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="portal-container">
          <h2>Institution & Organization Portal</h2>
          {/* Example form (customize fields as needed) */}
          <form className="institution-form">
            <div className="form-group">
              <label>Institution Name</label>
              <input type="text" placeholder="Enter institution name" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" placeholder="Enter address" />
            </div>
            <div className="form-group">
              <label>Contact Information</label>
              <input type="text" placeholder="Enter contact details" />
            </div>
            <div className="form-group">
              <label>Official E Stamp/Seal</label>
              <input type="text" placeholder="Enter official stamp/seal" />
            </div>
            <div className="form-group">
              <label>Recipient's Details</label>
              <input type="text" placeholder="Enter recipient details" />
            </div>
            <div className="form-group">
              <label>Type of Document</label>
              <input type="text" placeholder="Enter document type" />
            </div>
            <div className="form-group">
              <label>Document File</label>
              <input type="file" />
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
          <div className="logs-container">
            <h3>Logs</h3>
            <p>No logs yet...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

/* --- 2.1) Verify Portal Component --- */
function VerifyPortal() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="portal-container">
          <h2>Employer / Individual Verification</h2>
          <div className="form-group">
            <label htmlFor="institutionSelect">Available Institution</label>
            <select id="institutionSelect" name="institutionSelect">
              <option value="">Select Institution</option>
              <option value="inst1">Institution 1</option>
              <option value="inst2">Institution 2</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="documentUpload">Upload Document to Verify</label>
            <input type="file" id="documentUpload" />
          </div>
          <button className="upload-btn">Upload</button>
        </div>
      </main>
    </div>
  );
}

/* --- 3) Main App with Routes --- */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/institution" element={<InstitutionPortal />} />
        <Route path="/verify" element={<VerifyPortal />} />
      </Routes>
    </Router>
  );
}

export default App;

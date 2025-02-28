// src/VerifyPortal.js
import React from 'react';
import './App.css';

function VerifyPortal() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h1 className="logo">CertifyChain / AercaudLedger</h1>
        <button className="connect-wallet-btn">Connect Wallet</button>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        <div className="portal-container">
          <h2>Employer / Individual Verification</h2>

          {/* Dropdown for selecting an institution */}
          <div className="form-group">
            <label htmlFor="institutionSelect">Available Institution</label>
            <select id="institutionSelect" name="institutionSelect">
              <option value="">Select Institution</option>
              <option value="inst1">Institution 1</option>
              <option value="inst2">Institution 2</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* File upload input */}
          <div className="form-group">
            <label htmlFor="documentUpload">Upload Document to Verify</label>
            <input type="file" id="documentUpload" />
          </div>

          {/* Upload button */}
          <button className="upload-btn">Upload</button>
        </div>
      </main>
    </div>
  );
}

export default VerifyPortal;

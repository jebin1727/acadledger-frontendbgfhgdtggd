// src/InstitutionPortal.js
import React from 'react';
import './App.css'; // or a separate CSS if you prefer

function InstitutionPortal() {
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
          <h2>Institution & Organization Portal</h2>

          {/* Form Fields */}
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
              <input type="text" placeholder="Enter official stamp/seal info" />
            </div>

            <div className="form-group">
              <label>Recipient's Details</label>
              <input type="text" placeholder="Enter recipient details" />
            </div>

            <div className="form-group">
              <label>Document Type</label>
              <input type="text" placeholder="Enter type of document" />
            </div>

            <div className="form-group">
              <label>Document File</label>
              <input type="file" />
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>

          {/* Logs Section */}
          <div className="logs-container">
            <h3>Logs</h3>
            {/* We'll eventually display any logs or status messages here */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default InstitutionPortal;

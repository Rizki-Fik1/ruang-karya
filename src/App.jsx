import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";

//Page Import
import RegisterPage from './pages/RegisterPage';
import VerificationPage from './pages/VerificationPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
  <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<RegisterPage />} />
          <Route path="/verification/*" element={<VerificationPage />} />
          <Route path="/home" element={<HomePage />} />

          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    );
  }



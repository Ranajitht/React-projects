import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

function Home() {
  return <div className="h-screen flex items-center justify-center">Home Page</div>;
}

function About() {
  return <div className="h-screen flex items-center justify-center">About Page</div>;
}

function Services() {
  return <div className="h-screen flex items-center justify-center">Services Page</div>;
}

function Contact() {
  return <div className="h-screen flex items-center justify-center">Contact Page</div>;
}

function NavApp() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default NavApp;

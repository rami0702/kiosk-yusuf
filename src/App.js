import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Login from './pages/Login';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <nav className="bg-white p-4 shadow flex justify-between sticky top-0 z-50">
        <div className="font-bold text-xl">Haya Kiosk</div>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/products">Produkte</Link>
          <Link to="/cart">Warenkorb</Link>
          {authenticated && <Link to="/dashboard">Dashboard</Link>}
          <Link to="/about">Über uns</Link>
          <Link to="/contact">Kontakt</Link>
          <Link to="/terms">AGB</Link>
          {!authenticated ? <Link to="/login">Login</Link> : null}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={authenticated ? <Dashboard /> : <Login setAuthenticated={setAuthenticated} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="*" element={<div className="p-10 text-red-600">404 Nicht gefunden</div>} />
      </Routes>
    </div>
  );
}

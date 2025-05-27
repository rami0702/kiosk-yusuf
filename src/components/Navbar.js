// src/components/Navbar.js
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold tracking-wider">
          Haya Kiosk
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/">Startseite</Link>
          <Link to="/about">Über uns</Link>
          <Link to="/contact">Kontakt</Link>
          <Link to="/terms">AGB</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FiShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </Link>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-blue-700 px-4 py-3 space-y-2">
          <Link to="/" onClick={() => setOpen(false)} className="block">Startseite</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block">Über uns</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block">Kontakt</Link>
          <Link to="/terms" onClick={() => setOpen(false)} className="block">AGB</Link>
          <Link to="/dashboard" onClick={() => setOpen(false)} className="block">Dashboard</Link>
        </div>
      )}
    </nav>
  );
}

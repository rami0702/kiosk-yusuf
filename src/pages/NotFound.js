// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
      <p className="text-xl mb-6">Seite nicht gefunden</p>
      <Link to="/" className="text-blue-600 underline">
        Zur Startseite zurückkehren
      </Link>
    </div>
  );
}

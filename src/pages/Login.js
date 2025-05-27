import React, { useState } from 'react';

export default function Login({ setAuthenticated }) {
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setAuthenticated(true);
    } else {
      alert('Falsches Passwort');
    }
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl mb-4">🔐 Admin Login</h1>
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-xl shadow w-full max-w-sm">
        <label className="block mb-2 font-medium">Passwort</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full p-2 rounded mb-4"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Einloggen</button>
      </form>
    </div>
  );
}
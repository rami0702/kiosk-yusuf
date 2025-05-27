export default function Home() {
  return <div className="p-6">Willkommen im Haya Kiosk 🌟</div>;
}
import React, { useState, useEffect } from 'react';
import data from '../data/products.json';

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Dashboard</h1>
      <p>Willkommen Yusuf 👋</p>
      <table className="w-full mt-4 text-left">
        <thead>
          <tr>
            <th>Name</th>
            <th>Preis (€)</th>
            <th>Bild</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-t">
              <td>{p.name}</td>
              <td>{p.price.toFixed(2)}</td>
              <td><img src={p.image} alt={p.name} className="h-10" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

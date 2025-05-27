import React, { useEffect, useState } from 'react';
import data from '../data/products.json';

export default function Products() {
  const [products] = useState(data);
  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${item.name} hinzugefügt!`);
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((p) => (
        <div key={p.id} className="border rounded-xl shadow p-4">
          <img src={p.image} alt={p.name} className="h-40 w-full object-contain mb-2" />
          <h2 className="font-bold text-lg">{p.name}</h2>
          <p>{p.price.toFixed(2)} €</p>
          <button
            onClick={() => addToCart(p)}
            className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
          >
            In den Warenkorb
          </button>
        </div>
      ))}
    </div>
  );
}

import React, { useEffect, useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(stored);
  }, []);

  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Warenkorb</h1>
      {cart.length === 0 ? (
        <p>Ihr Warenkorb ist leer.</p>
      ) : (
        <div>
          {cart.map((item, i) => (
            <div key={i} className="flex justify-between border-b py-2">
              <span>{item.name}</span>
              <span>{item.price.toFixed(2)} €</span>
              <button
                onClick={() => removeItem(i)}
                className="text-red-500"
              >
                Entfernen
              </button>
            </div>
          ))}
          <div className="mt-4 font-bold">Gesamt: {total.toFixed(2)} €</div>
        </div>
      )}
    </div>
  );
}

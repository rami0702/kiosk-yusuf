// src/pages/Home.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const PRODUCTS = [
  { id: 1, name: 'Produkt 1', description: 'Beschreibung 1', price: 10.99 },
  { id: 2, name: 'Produkt 2', description: 'Beschreibung 2', price: 15.49 },
  { id: 3, name: 'Produkt 3', description: 'Beschreibung 3', price: 7.99 },
  { id: 4, name: 'Produkt 4', description: 'Beschreibung 4', price: 12.0 },
  { id: 5, name: 'Produkt 5', description: 'Beschreibung 5', price: 9.5 },
];

export default function Home() {
  const { addToCart, cartItems, removeFromCart, totalPrice, clearCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [orderType, setOrderType] = useState('Lieferung'); // Lieferung or Abholung

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* المنتجات */}
      <section className="flex-1 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">Produkte</h2>
        <ul>
          {PRODUCTS.map(product => (
            <li key={product.id} className="border-b border-gray-200 py-3 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-green-600 font-bold mt-1">{product.price.toFixed(2)} €</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Hinzufügen
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* سلة التسوق */}
      <section className="w-full md:w-96 bg-white rounded-xl shadow p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-4 flex justify-between items-center cursor-pointer" onClick={() => setShowCart(!showCart)}>
          Warenkorb
          <span>{showCart ? '▼' : '▶'}</span>
        </h2>

        {showCart && (
          <>
            {cartItems.length === 0 ? (
              <p className="text-gray-600">Ihr Warenkorb ist leer.</p>
            ) : (
              <ul className="flex-grow overflow-auto max-h-72">
                {cartItems.map(item => (
                  <li key={item.id} className="flex justify-between items-center border-b py-2">
                    <div>
                      <p>{item.name} x {item.qty}</p>
                      <p className="text-sm text-gray-500">{(item.price * item.qty).toFixed(2)} €</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 font-bold"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 border-t pt-4">
              <p className="font-bold text-lg">Gesamt: {totalPrice.toFixed(2)} €</p>
              <div className="mt-3 flex space-x-4 items-center">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="orderType"
                    value="Lieferung"
                    checked={orderType === 'Lieferung'}
                    onChange={() => setOrderType('Lieferung')}
                  />
                  <span>Lieferung</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="orderType"
                    value="Abholung"
                    checked={orderType === 'Abholung'}
                    onChange={() => setOrderType('Abholung')}
                  />
                  <span>Abholung</span>
                </label>
              </div>
              <button
                disabled={cartItems.length === 0}
                onClick={() => alert('Vielen Dank für Ihre Bestellung!')}
                className={`mt-4 w-full py-2 rounded text-white font-bold ${cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
              >
                Bestellung abschicken
              </button>
              <button
                onClick={clearCart}
                className="mt-2 w-full py-2 rounded border border-red-500 text-red-500 hover:bg-red-100"
              >
                Warenkorb leeren
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
export default function Home() {
  return <div className="p-6">Willkommen im Haya Kiosk 🌟</div>;
}
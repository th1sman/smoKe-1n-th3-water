"use client";
import { useState } from "react";

const shoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <div>
        {cartItems.length === 0 ? (
          <p>No hay artículos en el carrito.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Quitar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default shoppingCart;

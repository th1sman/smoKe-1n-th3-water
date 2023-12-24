import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
  const [paymentMessage, setPaymentMessage] = useState("");

  const handleAddItem = (item) => {
    setCartItems([...cartItems, item]);
  }

  const handleRemoveItem = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
  }
};

return (
        <div>
      <h2>Carrito de compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleAddItem(item)}>+</button>
            <button onClick={() => handleRemoveItem(item)}>-</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
      <button onClick={handleCheckout}>Realizar pago</button>
      {paymentMessage && <p>{paymentMessage}</p>}
    </div>
   )
}

export default Cart

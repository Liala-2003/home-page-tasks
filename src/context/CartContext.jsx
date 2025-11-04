import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [count, setCount] = useState(0);

  const addToCart = () => setCount(c => c + 1);
  const removeFromCart = () => setCount(c => Math.max(0, c - 1));
  const clearCart = () => setCount(0);

  return (
    <CartContext.Provider value={{ count, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

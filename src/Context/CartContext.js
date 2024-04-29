// CartContext.js

import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addOrder = (product, quantity) => {
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.product.id === product.id);
  
    if (existingProductIndex !== -1) {
      // Product already exists, update the quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Product doesn't exist, add a new entry
      setCart([...cart, { product, quantity }]);
    }
  };
  const deleteOrder = (productId) => {
    setCart(cart.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(cart.map(item => {
      if (item.product.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const getTotalBill = () => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const getTotalFavorites = () => {
    return cart.filter(item => item.product.isFavorite).length;
  };

  const updateFavorites = (productId) => {
    setCart(cart.map(item => {
      if (item.product.id === productId) {
        return { ...item, product: { ...item.product, isFavorite: !item.product.isFavorite } };
      }
      return item;
    }));
  };

  return (
    <CartContext.Provider value={{ cart, addOrder, deleteOrder, updateQuantity ,getTotalBill ,getTotalFavorites ,updateFavorites}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

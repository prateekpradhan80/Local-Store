import React, { createContext, useContext, useState } from "react";

// Create a context for the cart data
const CartContext = createContext();

// Create a custom hook to access the cart context
export const useCart = () => useContext(CartContext);

// Create a provider component to wrap the components that need access to the cart data
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const[theme , setTheme]=useState('white')
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const toggleTheme =()=>{
    setTheme(theme ==='white' ?'slate':'white')
  }
  return (
    <CartContext.Provider value={{ cart , setCart, addToCart,theme ,toggleTheme }}>
      {children}
    </CartContext.Provider>
  );
};

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext('light');

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [cart, setCart] = useState([]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const addToCart = (item:any) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId:any) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, cart, addToCart, removeFromCart }}>
      {children}
    </ThemeContext.Provider>
  );
};

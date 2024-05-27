import React, { createContext, useState } from 'react';

export const ThemeContext = createContext('');

export default function ThemeContextProvider({ children }) {
  const themeState = useState('dark');

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
}

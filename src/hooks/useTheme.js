import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useContext(ThemeContext);

  function handleToggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  return { theme, onToggleTheme: handleToggleTheme };
}

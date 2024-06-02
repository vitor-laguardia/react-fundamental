import React from 'react';
import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider } from 'styled-components';
import themes from './styles/themes';
import useTheme from './hooks/useTheme';

function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={themes[theme] || 'dark'}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;

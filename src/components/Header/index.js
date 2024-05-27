import React from 'react';

import { Container } from './styles';
import useTheme from '../../hooks/useTheme';

export default function Header() {
  const { theme, onToggleTheme } = useTheme();
  return (
    <Container>
      <h1>Vitor's Blog</h1>
      <button type='button' onClick={onToggleTheme}>
        {theme === 'dark' ? '🌚' : '🌞'}
      </button>
    </Container>
  );
}

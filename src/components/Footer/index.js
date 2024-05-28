import React from 'react';

import { Container } from './styles';
import useTheme from '../../hooks/useTheme';

export default function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <Container>
      <span>Vitor's Blog. All rights reserved.</span>
      <button type='button' onClick={setTheme}>
        {theme === 'dark' ? '🌚' : '🌞'}
      </button>
    </Container>
  );
}

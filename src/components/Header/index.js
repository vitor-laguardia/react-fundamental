import React, { Component } from 'react';

import { Container } from './styles';
import useTheme from '../../hooks/useTheme';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts/ThemeContext';

//  functional component

// export default function Header() {
//   const { theme, onToggleTheme } = useTheme();
//     return (
//       <Container>
//         <h1>Vitor's Blog</h1>
//         <button type='button' onClick={onToggleTheme}>
//           {theme === 'dark' ? '🌚' : '🌞'}
//         </button>
//       </Container>
//     );
// }

// Class component

export default class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <Container>
            <h1>Vitor's Blog</h1>
            <button
              type='button'
              onClick={() =>
                setTheme((prevTheme) =>
                  prevTheme === 'dark' ? 'light' : 'dark'
                )
              }
            >
              {theme === 'dark' ? '🌚' : '🌞'}
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
  }
}

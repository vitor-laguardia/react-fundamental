import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function useTheme(WrappedComponent) {
  return class UseTheme extends React.Component {
    toggleTheme = {
      dark: 'light',
      light: 'dark',
    };

    handleToggleTheme = (setTheme) => {
      setTheme((prevTheme) => ({
        theme: this.toggleTheme[prevTheme.theme],
      }));
    };

    render() {
      return (
        <ThemeContext.Consumer>
          {({ theme, setTheme }) => (
            <WrappedComponent
              theme={theme}
              onToggleTheme={() => this.handleToggleTheme(setTheme)}
              {...this.props}
            />
          )}
        </ThemeContext.Consumer>
      );
    }
  };
}

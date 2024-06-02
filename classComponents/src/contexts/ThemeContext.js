import React, { createContext } from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends React.Component {
  state = {
    theme: 'dark',
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          setTheme: this.setState.bind(this),
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

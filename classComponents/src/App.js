import React from 'react';
import Layout from './components/Layout';
import GlobalStyle from './styles/global';
import themes from './styles/themes';
import withTheme from './hocs/useTheme';
import { ThemeProvider } from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themes[this.props.theme] || 'dark'}>
        <Layout />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}

export default withTheme(App);

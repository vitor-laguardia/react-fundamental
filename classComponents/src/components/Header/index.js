import React, { Component } from 'react';
import useTheme from '../../hocs/useTheme';
import { Container } from './styles';
import { displayEmoji } from '../../util/conts';

class Header extends Component {
  render() {
    return (
      <Container>
        <h1>Vitor's Blog</h1>
        <button type='button' onClick={this.props.onToggleTheme}>
          {displayEmoji[this.props.theme]}
        </button>
      </Container>
    );
  }
}

export default useTheme(Header);

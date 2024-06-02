import React, { Component } from 'react';
import { Container } from './styles';
import useTheme from '../../hocs/useTheme';
import { displayEmoji } from '../../util/conts';
class Footer extends Component {
  render() {
    return (
      <Container>
        <span>Vitor's Blog. All rights reserved.</span>
        <button type='button' onClick={this.props.onToggleTheme}>
          {displayEmoji[this.props.theme]}
        </button>
      </Container>
    );
  }
}

export default useTheme(Footer);

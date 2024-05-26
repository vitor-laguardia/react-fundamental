import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { ThemeContext } from '../../contexts/ThemeProvider';
import styled from 'styled-components';
import Title from '../Title';
// const Title = styled.h1`
//   color: #637bf3;
// `;

export default function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Title>{title}</Title>
      <Button onClick={onToggleTheme}>Change Theme</Button>
      {children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
  title: `Vitor's Blog`,
};

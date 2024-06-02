import { createGlobalStyle, css } from 'styled-components';

//margins reset, etc
export default createGlobalStyle`
  body {
    ${(props) => css`
      background: ${props.theme.backgroundColor};
      color: ${props.theme.textColor};
    `};
    font-family: sans-serif;
  }
`;

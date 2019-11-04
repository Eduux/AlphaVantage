import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  html, body, #root {
    min-height: 100%;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline-color: ${(props) => props.theme.colors.outlineColor};
  }

  body {
    font-family: ${(props) => props.theme.colors.fontFamily};
    background-color: ${(props) => props.theme.colors.backgroundColor};
    color: white;
    font-size: 16px;
    outline-color: ${(props) => props.theme.colors.outlineColor};
    -webkit-font-smoothing: antialiased!important;
    text-rendering: optimizeLegibility!important;
  }

  img {
    max-width: 100%;
  }

  button {
    cursor: pointer;
  }
`;

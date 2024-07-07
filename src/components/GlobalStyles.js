import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #fff;
    color: #333;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: #28a745;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }
  body {
    font-family: Inter sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4;
    color: #1c1d1f;
  }
  h1 {
    font-size: 1rem;
  }
`;

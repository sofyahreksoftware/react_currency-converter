import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
    margin: 60px auto;
    font-size: 20px;
    font-family: "Roboto Slab", serif;
    color: hsl(0, 59%, 11%);
    background-image: url("../public/background-image.jpg");
    background-size: cover;
    background-position: center;
    max-width: 850px;
  }
  button:hover {
    cursor: pointer;
  }
  `;

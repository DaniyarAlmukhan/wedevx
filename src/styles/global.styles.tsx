import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: var(--font-montserrat);
  }

  :root {
    --primary-color: #e0f0bc;
    --font-montserrat: 'Montserrat', sans-serif;
    --secondary-color: #e0e0e0;
  }
`;

export default GlobalStyles;

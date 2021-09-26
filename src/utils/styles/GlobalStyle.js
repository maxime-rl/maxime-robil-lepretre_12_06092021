import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

/**
 * Global styles for all the Application
 */
const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }
  
  li {
    list-style: none;
  }

  a {
    text-decoration: inherit;
    color: inherit;
  }

  .active-link {
    text-decoration: underline;
  }

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
            clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
`;

export default GlobalStyle;

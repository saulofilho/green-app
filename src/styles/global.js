import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
    }

  html, body, #root {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 3px var(pink);
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(123, 255, 0);
  }
  ::selection {
    background: yellowgreen;
    color: darkblue;
  }
`;

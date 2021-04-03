import { createGlobalStyle } from 'styled-components';
import 'remixicon/fonts/remixicon.css';
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
    font-family: 'Rubik', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    font-family: 'Rubik', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #a7ff83;
  }

  ::selection {
    background: #071a52;
    color: #17b978;
  }

  .ReactModal__Overlay.ReactModal__Overlay--after-open {
    background-color: rgba(0, 0, 0, 0.75) !important;
    z-index: 999;
  }
`;

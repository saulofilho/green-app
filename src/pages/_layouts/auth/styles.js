import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #071a52;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
`;

export const Content = styled.div`
  margin: 0px auto;
  padding: 0 30px;
  max-width: 300px;
  width: 100%;
  z-index: 1;

  h3 {
    text-align: center;
    padding-top: 50px;
    color: #fff;
    font-weight: bolder;
    font-family: 'Source Serif Pro', serif;
  }

  form {
    display: flex;
    justify-content: center;
    flex-flow: column;
    width: 100%;
    height: auto;
    border-radius: 5px;
    padding: 50px 0;

    input {
      font-family: 'Rubik', sans-serif;
      width: 100%;
      height: auto;
      padding: 10px 15px;
      border: unset;
      border-bottom: 2px solid #fff;
      color: #fff;
      margin: 0 0 10px;
      font-size: 18px;
      background: transparent;
    }

    span {
      color: #fb6f91;
      align-self: center;
      margin: 0px 0 15px;
      font-size: 14px;
    }

    button {
      margin: 20px 0 0;
      height: 44px;
      background: #a7ff83;

      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      font-family: 'Rubik', sans-serif;

      &:hover {
        background: ${darken(0.03, 'lightgreen')};
        color: #000;
      }
    }
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;

import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperHome = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    -225deg,
    rgb(198, 255, 221),
    rgb(251, 215, 134),
    rgb(247, 121, 125)
  );
`;

export const Content = styled.div`
  margin: 0px auto;
  padding: 0 30px;
  max-width: 300px;
  width: 100%;

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
      margin: 0 0 20px;
      font-size: 24px;
      background: transparent;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
      font-size: 12px;
    }

    button {
      margin: 5px 0 0;
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

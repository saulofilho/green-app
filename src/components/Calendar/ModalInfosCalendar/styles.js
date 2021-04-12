import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-flow: column;
  width: 100%;
  height: auto;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 50px;

  input {
    font-family: 'Rubik', sans-serif;
    width: 100%;
    height: auto;
    padding: 10px 15px;
    border: unset;
    border-bottom: 2px solid #000;
    margin: 0 0 50px;
    font-size: 24px;
  }

  #flowering_type {
    width: 100%;
    margin: 0 0 50px;
  }

  textarea {
    font-family: 'Rubik', sans-serif;
    font-size: 24px;
    width: 100%;
    min-height: 100px;
    padding: 10px 15px;
    border: unset;
    border-bottom: 2px solid #000;
    overflow: auto;
    resize: vertical;
    margin: 5px 0 20px;
    font-family: 'Open Sans', sans-serif;
  }
`;

export const BtnModal = styled.button`
  background: transparent;
  border: unset;
  margin-left: auto;
`;

export const DownloadData = styled.div`
  width: 50%;
  height: auto;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: row;
  cursor: pointer;
  padding: 10px;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  text-align: center;
  margin: 0 auto 20px;
  box-shadow: 5px 10px #000;

  button {
    border: unset;
    background: transparent;
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
  }

  &:active {
    background-color: #17b978 !important;
    box-shadow: 2px 5px #000;
    transform: translateY(4px);
  }

  a {
    width: 100%;
    color: #000;
    text-decoration: none;
  }

  :hover {
    background-color: #a7ff83;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Source Serif Pro', serif;
  font-size: 22px;
  font-style: italic;
  font-weight: bolder;
`;

export const Text = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  flex-flow: row;
  padding: 0 0 15px;
`;

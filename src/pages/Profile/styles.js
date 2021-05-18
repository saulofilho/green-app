import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px auto;
  padding: 0 30px;

  form {
    display: flex;
    justify-content: center;
    flex-flow: column;
    width: 100%;
    height: auto;
    padding: 50px 0;
    padding: 50px;
    border: 2px solid #000;

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
  }
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
`;

export const FormEditRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
`;

export const Title = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 24px;
  padding: 0 0 10px;
`;

export const Subtitle = styled.p`
  font-family: 'Source Serif Pro', serif;
  font-size: 16px;
  padding: 0 0 25px;
  font-style: italic;
  font-weight: bolder;
`;

export const NewAccount = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  margin: 0 auto;

  a {
    color: salmon;
  }
`;

export const DownloadData = styled.div`
  width: 50%;
  height: 100%;
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
  margin: 30px auto;
  box-shadow: 5px 10px #000;

  button {
    border: unset;
    background: transparent;
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    width: 100%;
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

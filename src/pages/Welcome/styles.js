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
    border-radius: 5px;
    padding: 50px 0;

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

    .salvar {
      width: 100%;
      height: 32px;
      font-size: 14px;
      font-weight: 500;
      font-stretch: normal;
      border: solid 2px #000;
      background-color: #fff;
      color: #000;

      :hover {
        background-color: #a7ff83;
      }
    }

    .deletar {
      width: 100%;
      height: 32px;
      font-size: 14px;
      font-weight: 500;
      font-stretch: normal;
      border: solid 2px #000;
      background-color: #fff;
      color: #000;

      :hover {
        background-color: lightsalmon;
      }
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
  font-size: 36px;
  padding: 0 0 10px;
`;

export const Subtitle = styled.p`
  font-family: 'Source Serif Pro', serif;
  font-size: 18px;
  padding: 0 0 25px;
  font-style: italic;
  font-weight: bolder;
`;

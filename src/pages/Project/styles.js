import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 0px auto;
  padding: 0 30px;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
`;

export const WrapperContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 0;
`;

export const WrapperData = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  display: ${props => (props.hide ? 'block' : 'none')};
`;

export const WrapperDataAdd = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  display: ${props => (props.hideAdd ? 'block' : 'none')};
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-flow: column;
  width: 100%;
  height: auto;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 50px 0;

  p {
    font-size: 16px;
    font-weight: normal;
    padding: 16px;
    margin-bottom: 34px;
  }

  label {
    font-size: 24px;
    font-weight: normal;
    color: #000;
  }

  input {
    width: 100%;
    height: auto;
    padding: 10px 15px;
    border: unset;
    border-bottom: 2px solid #000;
    margin: 5px 0 20px;
    margin: 0 10px;
  }

  textarea {
    width: 100%;
    height: auto;
    padding: 10px 15px;
    border: unset;
    border-bottom: 2px solid #000;
    overflow: auto;
    resize: vertical;
    margin: 5px 0 20px;
    font-family: 'Open Sans', sans-serif;
  }

  .salvar {
    width: 72px;
    height: 32px;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    border: solid 1px rgba(255, 255, 255, 0.16);
    background-color: lightgreen;
    color: #fff;

    &[disabled] {
      background-color: #dee2e6;
    }

    &[enable]:hover {
      background: ${darken(0.09, 'lightgreen')};
      color: white;
    }
  }
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: row;
`;

export const WrapperInfos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
`;

export const Col = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
`;

export const DayWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  cursor: pointer;
`;

export const AddWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  cursor: pointer;
  padding: 20px;
`;

export const RowDay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row;
  background: white;

  p:nth-child(1) {
    font-size: 12px;
  }

  p:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    font-size: 36px;
  }

  @media (max-width: 768px) {
    p:nth-child(1) {
      font-size: 8px;
    }

    p:nth-child(2) {
      font-size: 18px;
    }
  }
`;

export const RowDayWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row;
  background: black;
`;

export const ColDay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const Number = styled.div`
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  color: white;
  font-size: 2rem;
`;

export const BorderLeft = styled.div`
  width: 100%;
  height: 100%;
  border-left: 2px solid black;
`;

export const BorderBotAndLeft = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
`;

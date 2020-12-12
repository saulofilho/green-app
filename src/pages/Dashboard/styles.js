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

export const Graphs = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  border: 2px solid red;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
`;

export const WrapperWizard = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0;
  display: ${props => (props.hide ? 'block' : 'none')};
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
    font-size: 14px;
    font-weight: normal;
    color: #8493a5;
  }

  input {
    width: 100%;
    height: auto;
    padding: 10px 15px;
    background: #f9fafc;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    margin: 5px 0 20px;
  }

  textarea {
    width: 100%;
    height: auto;
    padding: 10px 15px;
    background: #f9fafc;
    border: 1px solid #dee2e6;
    border-radius: 5px;
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

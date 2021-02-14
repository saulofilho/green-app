import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 0px auto;
  padding: 0 30px;
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

export const Today = styled.p`
  font-family: 'Source Serif Pro', serif;
  font-size: 16px;
  padding: 20px 0 50px;
  text-align: center;
  width: 100%;
  color: #17b978;
`;

export const Loading = styled.p`
  font-size: 16px;
  padding: 0 0 20px;
  font-style: italic;
  color: #f7347a;
`;

export const NumberHarvests = styled.p`
  font-size: 14px;
  padding: 0 0 20px;
  text-align: center;
  width: 100%;
`;

export const HarvestName = styled.ul`
  padding: 0 0 80px;
  text-align: center;
  width: 100%;

  li {
    padding: 0 0 5px;
  }
  a {
    font-family: 'Rubik', sans-serif;
    font-size: 20px;
    color: #071a52;
  }
  a:hover {
    color: #17b978;
    font-style: italic;
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

export const CreateHarvestBtn = styled.button`
  margin: 0 auto 80px;
  border: 2px solid black;
  padding: 5px 10px;
  background: unset;
  width: 50%;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  box-shadow: 5px 10px #000;

  &:active {
    background-color: #17b978 !important;
    box-shadow: 2px 5px #000;
    transform: translateY(4px);
  }

  &:hover {
    background: #a7ff83;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;

  p {
    font-family: 'Source Serif Pro', serif;
    font-size: 18px;
    padding: 0 0 5px;
    font-style: italic;
    font-weight: bolder;
  }
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

  .salvar {
    width: 72px;
    height: 32px;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    border: solid 2px #086972;
    background-color: #a7ff83;
    color: #000;

    &[disabled] {
      background-color: #dee2e6;
    }

    &[enable]:hover {
      background: ${darken(0.09, 'lightgreen')};
      color: #000;
    }
  }
`;

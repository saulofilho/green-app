import styled from 'styled-components';
import Select from 'react-select';
import { darken } from 'polished';

export const Title = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 40px;
  padding: 0 0 30px;
`;

export const Subtitle = styled.p`
  font-family: 'Source Serif Pro', serif;
  font-size: 18px;
  font-style: italic;
  font-weight: bolder;
`;

export const Text = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  padding: 0 0 10px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: row;
`;

export const WrapperProjectInfos = styled.div`
  padding: 30px 0;
`;

export const AddWrapper = styled.div`
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
  margin: 40px auto 20px;
  box-shadow: 5px 10px #000;

  &:active {
    background-color: #17b978 !important;
    box-shadow: 2px 5px #000;
    transform: translateY(4px);
  }

  :hover {
    background-color: #a7ff83;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const WrapperContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const WrapperData = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  display: ${props => (props.hide ? 'block' : 'none')};
  padding: 20px;
`;

export const WrapperDataAdd = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  display: ${props => (props.hideAdd ? 'block' : 'none')};
  margin-bottom: 20px;
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
    padding: 10px 5px;
    border: unset;
    border-bottom: 2px solid #000;
    margin: 0 0 20px;
    font-size: 24px;
  }

  #phase,
  #img_id {
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

  img {
    width: 100%;
    border: 1px solid #000;
  }

  input::placeholder,
  textarea::placeholder {
    color: lightgray;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  padding: 30px;

  p {
    font-family: 'Source Serif Pro', serif;
    font-size: 18px;
    padding: 0 0 5px;
    font-style: italic;
    font-weight: bolder;
  }
`;

export const SelectStyled = styled(Select)`
  width: 100%;
`;

export const WarnProgress = styled.div`
  width: 100%;
  color: #17b978;
  text-align: left;
  font-size: 14px;
  padding-bottom: 20px;
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
  margin: 20px auto;
  box-shadow: 5px 10px #000;

  button {
    border: unset;
    background: transparent;
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    width: 100%;
  }

  &:active {
    background-color: #17b978 !important;
    box-shadow: 2px 5px #000;
    transform: translateY(4px);
  }

  &[disabled] {
    background-color: #dee2e6;
  }

  &[enable]:hover {
    background: ${darken(0.09, 'lightgreen')};
    color: #000;
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

import styled from 'styled-components';
import Select from 'react-select';

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
  width: 100%;
  height: 100%;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  cursor: pointer;
  padding: 20px;
  font-family: 'Rubik', sans-serif;
  font-size: 24px;
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
  padding: 20px;
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

  input {
    font-family: 'Rubik', sans-serif;
    width: 50%;
    height: auto;
    padding: 10px 15px;
    border: unset;
    border-bottom: 2px solid #000;
    margin: 0 0 50px;
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
    min-height: 400px;
    padding: 10px 15px;
    border: unset;
    border-bottom: 2px solid #000;
    overflow: auto;
    resize: vertical;
    margin: 5px 0 20px;
    font-family: 'Open Sans', sans-serif;
  }

  img {
    width: 100%;
    border: 1px solid #000;
  }

  @media (max-width: 768px) {
    input {
      margin: 0 0 20px;
      width: 100%;
    }
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

  @media (max-width: 768px) {
    padding: 10px 30px;
  }
`;

export const Button = styled.button`
  border: unset;
  background: unset;
`;

export const Col = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
`;

export const WrapperInfos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  padding: 0 0 20px;
  flex: 1;

  i {
    padding: 0 20px 0 0;
  }

  img {
    width: 100%;
    border: 1px solid #000;
  }

  @media (max-width: 768px) {
    i {
      font-size: 1.5rem;
      padding: 0 10px 0 0;
    }
  }
`;

export const TitleBox = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const SelectEdited = styled(Select)`
  width: 100%;
`;

export const DownloadData = styled.div`
  width: 100%;
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

import styled from 'styled-components';
import { darken } from 'polished';

const theme = theme => {
  switch (theme) {
    case 'germination':
      return '#7d634b';
    case 'vegetation':
      return '#17b978';
    case 'flowering':
      return '#d592e5';
    case 'washing':
      return '#c0d6e4';
    case 'drying':
      return '#a2a592';
    case 'cured':
      return '#ffa54f';
    case 'none':
      return '#000';
  }
};

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

  #phase {
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

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
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
  font-family: 'Rubik', sans-serif;
  font-size: 24px;
`;

export const RowDay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row;
  background: white;
`;

export const RowDayWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row;
  background-color: ${props =>
    props.theme ? theme(props.theme) : 'black'} !important;
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

export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: row;
`;

export const WrapperProjectInfos = styled.div`
  padding: 30px 0;
`;

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

export const TitleBox = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const TextBox = styled.p`
  font-family: 'Source Serif Pro', serif;
  font-size: 24px;
  font-weight: bolder;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const SmallText = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

export const BigText = styled.p`
  font-family: 'Rubik', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 18px;
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

export const Button = styled.button`
  border: unset;
  background: unset;
`;

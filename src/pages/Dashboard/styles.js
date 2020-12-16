import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  font-family: 'Merriweather', serif;
  margin: 0px auto;
  padding: 0 30px;
`;

export const Title = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 24px;
  padding: 10px 0 20px;
`;

export const Subtitle = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 14px;
  padding: 10px 0 20px;
`;

export const Text = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 12px;
  padding: 10px 0 20px;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
`;

export const WrapperWizard = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0;
  display: ${props => (props.hide ? 'block' : 'none')};
`;

export const CreateHarvestBtn = styled.button`
  margin-top: 10px;
  border: 2px solid black;
  padding: 5px 10px;
  background: unset;
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

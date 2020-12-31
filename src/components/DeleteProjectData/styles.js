import styled from 'styled-components';
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

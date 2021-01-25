import styled from 'styled-components';

const themeColor = theme => {
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
    default:
      return '#fff';
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
    props.theme ? themeColor(props.theme) : 'black'} !important;
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
  font-size: 24px;

  @media (max-width: 768px) {
    padding: 0 15px;
    font-size: 18px;
  }
`;

export const WrapperNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-flow: column;
  color: white;
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
    font-size: 14px;
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
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Source Serif Pro', serif;
  font-size: 18px;
  padding: 0 0 25px;
  font-style: italic;
  font-weight: bolder;
`;

export const Warn = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  padding: 10px 0 15px;
`;

export const Week = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
  }
  p {
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
    width: 60px;
    color: #a7ff83;
  }
  span {
    background: #a7ff83;
    width: 100%;
    height: 2px;
  }
`;

export const LoadData = styled.div`
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
  margin: 0 auto;

  :hover {
    background-color: #a7ff83;
  }
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
  margin: 20px auto 0;

  a {
    width: 100%;
    color: #000;
    text-decoration: none;
  }

  :hover {
    background-color: #a7ff83;
  }
`;

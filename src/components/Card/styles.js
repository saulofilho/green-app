import styled from 'styled-components';

const themeColor = theme => {
  switch (theme) {
    case 'germinative':
      return '#7d634b';
    case 'vegetative':
      return '#17b978';
    case 'flowering':
      return '#d592e5';
    case 'flushing':
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

export const WrapperContent = styled.div`
  width: auto;
  height: 100%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  @media (max-width: 768px) {
    margin: 5px;
  }
`;

export const DayCard = styled.div`
  width: 100px;
  height: 100%;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  cursor: pointer;

  :hover {
    border: 2px solid black;
    box-shadow: 2px 3px #000;
    transform: translateY(4px);
  }

  @media (max-width: 768px) {
    width: 120px;
  }
`;

export const RowDayWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  padding: 10px;
  background-color: ${props =>
    props.theme ? themeColor(props.theme) : 'black'} !important;
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

export const CardInfosWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const CardInfosWrapperCenter = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 0;
`;

export const SmallText = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

export const SmallTextCenter = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 12px;
  text-align: center;
  width: 100%;
  color: white;
  padding: 5px 0;

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
  font-size: 14px;
  color: white;

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

export const Week = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    padding-top: 3px;
  }
  p {
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
    width: 60px;
    color: #17b978;
  }
  span {
    background: #17b978;
    width: 100%;
    height: 2px;
  }
  .ri-arrow-up-line {
    color: #17b978;
  }
`;

import styled from 'styled-components';
import Select from 'react-select';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0 50px;
`;

export const SelectEdited = styled(Select)`
  padding: 10px 0 0;
`;

export const WrapperGraph = styled.div`
  width: 100%;
  height: 500px;
`;

export const SelectTitle = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  padding: 30px 0 0;
`;

export const CalendarLegend = styled.div`
  text-align: center;
  position: relative;
  top: -75px;
  font-size: 12px;
`;

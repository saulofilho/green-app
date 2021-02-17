import styled from 'styled-components';

export const Title = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 48px;
  padding: 0 0 30px;
  font-weight: bolder;
  line-height: 40px;
`;

export const Subtitle = styled.p`
  font-family: 'Source Serif Pro', serif;
  font-size: 16px;
  font-style: italic;
  font-weight: bolder;
`;

export const Text = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  flex-flow: row;
  padding: 0 0 15px;
`;

export const WrapperProjectInfos = styled.div`
  padding: 30px 0;
  width: 100%;
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

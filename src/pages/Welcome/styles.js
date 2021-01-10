import styled from 'styled-components';

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

export const FormEditRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
`;

export const Title = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 36px;
  padding: 0 0 10px;
`;

export const Subtitle = styled.p`
  font-family: 'Source Serif Pro', serif;
  font-size: 18px;
  padding: 0 0 25px;
  font-style: italic;
  font-weight: bolder;
`;

export const Text = styled.p`
  font-family: 'Source Serif Pro', serif;
  font-size: 16px;
  padding: 0 0 50px;
`;

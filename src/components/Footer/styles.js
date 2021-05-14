import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  font-family: 'Rubik', sans-serif;

  a {
    display: inline-block;
    width: auto;
    margin: 0;
  }

  img {
    width: 150px;
  }
`;

export const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

export const ErrorWarning = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Rubik', sans-serif;
  flex-flow: column;
  text-align: center;
  font-size: 12px;
  padding: 10px;
`;

export const ThinkAbout = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Rubik', sans-serif;
  flex-flow: column;
  text-align: center;
  font-size: 12px;
  padding-top: 50px;
  color: #a7ff83;
`;

import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 30px 50px;

  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;

export const Content = styled.div`
  height: 80px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;

  nav {
    display: flex;
    align-items: center;

    a {
      display: inline-block;
      width: auto;
      margin: 0;
    }

    img {
      width: 150px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column;
    flex-direction: column-reverse;

    height: 100%;

    nav {
      margin-top: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  p {
    font-family: 'Source Serif Pro', serif;
    font-size: 12px;
  }

  a {
    display: block;
    font-size: 16px;
    color: #17b978;
    font-family: 'Rubik', sans-serif;
  }
`;

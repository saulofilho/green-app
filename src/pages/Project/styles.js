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
  flex-flow: wrap;
`;

export const Subtitle = styled.p`
  font-family: 'Source Serif Pro', serif;
  font-size: 18px;
  padding: 0 0 25px;
  font-style: italic;
  font-weight: bolder;
`;

export const WrapperDownloadData = styled.div`
  width: 100%;
  padding-top: 30px;
`;

export const DownloadData = styled.div`
  width: 50%;
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
  margin: 0 auto 20px;
  box-shadow: 5px 10px #000;

  button {
    border: unset;
    background: transparent;
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
  }

  &:active {
    background-color: #17b978 !important;
    box-shadow: 2px 5px #000;
    transform: translateY(4px);
  }

  a {
    width: 100%;
    color: #000;
    text-decoration: none;
  }

  :hover {
    background-color: #a7ff83;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TableComparativeWrapper = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  display: block;
  border: 2px solid #a7ff83;
  margin-bottom: 50px;
  overflow: auto;
  text-align: center;

  table {
    border-collapse: collapse;
    text-align: center;

    th {
      padding: 20px;
      text-align: left;
      background-color: #17b978;
      color: white;
      border: 3px solid white;
      text-align: center;
    }

    td {
      padding: 20px;
      border: 3px solid white;
    }

    tbody:nth-child(even) {
      background-color: #f2f2f2;
    }

    tbody:hover {
      background-color: #a7ff83;
    }
  }
`;

export const Loading = styled.p`
  font-size: 16px;
  padding: 0 0 20px;
  font-style: italic;
  color: #f7347a;
  height: 100%;
  text-align: center;
  width: 100%;
`;

export const SelectTitle = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  padding: 30px 0 10px;
`;

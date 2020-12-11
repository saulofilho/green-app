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

export const Graphs = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  border: 2px solid red;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
`;

export const WrapperWizard = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0;
  display: ${props => (props.hide ? 'block' : 'none')};
`;

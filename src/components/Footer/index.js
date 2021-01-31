import React from 'react';
import swLogo from '../../assets/images/SpeedWeedLogo.png';
import {
  Container,
  Content,
  LogosWrapper,
  ErrorWarning,
  ThinkAbout,
} from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <LogosWrapper>
          <a href="https://spdwd.xyz" target="_blank" rel="noopener noreferrer">
            <img src={swLogo} alt="SpeedWeed Inc Logo" />
          </a>
          <br />
        </LogosWrapper>
        <ErrorWarning>
          If you saw something wrong, don't be shy and drop a message to fix the
          bug at:
          <a href="mailto:">hello@saulofilho.com</a>
        </ErrorWarning>
      </Content>
      <ThinkAbout>MAKE CODE, NOT WAR</ThinkAbout>
    </Container>
  );
}

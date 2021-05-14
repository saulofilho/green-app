import React from 'react';
import swLogo from '../../assets/images/bvl.gif';
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
          <a
            href="https://bueanvistalab.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={swLogo} alt="SpeedWeed Inc Logo" />
          </a>
          <br />
        </LogosWrapper>
        <ErrorWarning>
          If you saw something wrong, don&apos;t be shy and drop a message to
          fix the bug at:
          <a href="mailto:">hi@buenavistalab.com</a>
        </ErrorWarning>
      </Content>
      <ThinkAbout>MAKE CODE, NOT WAR</ThinkAbout>
    </Container>
  );
}

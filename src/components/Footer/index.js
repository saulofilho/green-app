import React from 'react';
import bvlLogo from '../../assets/images/bvl-logo.png';
import swLogo from '../../assets/images/SpeedWeedLogo.png';
import { Container, Content } from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <a href="https://buenavistalab.com">
          <img src={bvlLogo} alt="SpeedWeed Inc Logo" />
        </a>
        & &nbsp;&nbsp;&nbsp;
        <a href="https://speedweedcyber.com">
          <img src={swLogo} alt="SpeedWeed Inc Logo" />
        </a>
      </Content>
    </Container>
  );
}

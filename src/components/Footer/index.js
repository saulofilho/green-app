import React from 'react';
import bvlLogo from '../../assets/images/bvl-logo.png';
import swLogo from '../../assets/images/SpeedWeedLogo.png';
import { Container, Content } from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <a
          href="https://buenavistalab.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={bvlLogo} alt="BuenaVistaLab, Inc Logo" />
        </a>
        & &nbsp;&nbsp;&nbsp;
        <a href="https://spdwd.xyz" target="_blank" rel="noopener noreferrer">
          <img src={swLogo} alt="SpeedWeed Inc Logo" />
        </a>
      </Content>
    </Container>
  );
}

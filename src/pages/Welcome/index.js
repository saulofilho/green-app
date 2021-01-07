import React from 'react';
import logo1 from '../../assets/images/logo-1.svg';
import logo2 from '../../assets/images/logo-2.svg';
import logo3 from '../../assets/images/logo-3.svg';
import logo4 from '../../assets/images/logo-4.svg';
import logo5 from '../../assets/images/logo-5.svg';
import logo6 from '../../assets/images/logo-6.svg';
import { Container, Content } from './styles';

export default function Welcome() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  const randomLogo = logos[Math.floor(Math.random() * logos.length)];

  return (
    <Container>
      <Content>
        <img src={randomLogo} alt="logo from home page" />
        <h1>
          We are working to launch the app. Soon will be live. Take a look at:{' '}
          <a href="https://botanicdailydata.com/app">here</a>
        </h1>
      </Content>
    </Container>
  );
}

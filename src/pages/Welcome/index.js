import React from 'react';
import logo1 from '../../assets/images/logo-1.svg';
import logo2 from '../../assets/images/logo-2.svg';
import logo3 from '../../assets/images/logo-3.svg';
import logo4 from '../../assets/images/logo-4.svg';
import logo5 from '../../assets/images/logo-5.svg';
import logo6 from '../../assets/images/logo-6.svg';
import { Container, Content, Title, Subtitle, Text } from './styles';

export default function Welcome() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  const randomLogo = logos[Math.floor(Math.random() * logos.length)];

  return (
    <Container>
      <Content>
        <Title>Welcome to your data storage.</Title>
        <Subtitle>
          Com o BDD você consegue cadastrar e controlar individualmente cada
          plantação, tanto indoor quanto outdoor, de um jeito simples e
          tecnológico.
        </Subtitle>
        <Text>
          O primeiro passo é criar o seu projeto. Depois é só escolher qual
          projeto acessar para dar início a entrada de dados do seu database.
          Gráficos ajudam você a entender melhor qualquer acontecimento em sua
          planta. Você pode comparar os dados de cada dia para entender e tomar
          a melhor decisão. Abaixo você consegue cadastrar quantos projetos você
          quiser. São apenas alguns passos. Vamos lá?
        </Text>
        <img src={randomLogo} alt="logo from home page" />
        <h1>
          We are working to launch the app. Soon will be live. Take a look at:{' '}
          <a href="https://botanicdailydata.com/app">here</a>
        </h1>
      </Content>
    </Container>
  );
}

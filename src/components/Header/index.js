import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/images/logo-1.svg';
import logo2 from '../../assets/images/logo-2.svg';
import logo3 from '../../assets/images/logo-3.svg';
import logo4 from '../../assets/images/logo-4.svg';
import logo5 from '../../assets/images/logo-5.svg';
import logo6 from '../../assets/images/logo-6.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  const randomLogo = logos[Math.floor(Math.random() * logos.length)];

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/app">
            <img src={randomLogo} alt="Botanic Daily Data Logo Header" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <p>Welcome,&nbsp;</p>
            <Link to="/app/profile">{profile.name}</Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

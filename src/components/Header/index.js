import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/images/logo-2.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={headerLogo} alt="Botanic Daily Data Logo Header" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <p>Welcome,&nbsp;</p>
            <Link to="/profile">{profile.name}</Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

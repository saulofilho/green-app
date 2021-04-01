import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/bdd-logo-new.png';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Botanic Daily Data Logo Header" />
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

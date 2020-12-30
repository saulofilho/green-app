import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">BOTANIC DAILY DATA</Link>
        </nav>
        <aside>
          <Profile>
            <p>Hello,&nbsp;</p>
            <Link to="/profile">{profile.name}</Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

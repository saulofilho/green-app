import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { store } from '../../store';

import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';

import {
  Container,
  Content,
  FormEditRow,
  Title,
  Subtitle,
  NewAccount,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <Title>Hey! I am your harvest data.</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </Subtitle>
        <Form initialData={profile} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Your full name" />
          <Input type="email" name="email" placeholder="Your email" />
          <Input
            type="password"
            name="oldPassword"
            placeholder="Your current password"
          />
          <Input type="password" name="password" placeholder="New password" />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
          />
          <FormEditRow>
            <button type="submit" className="salvar">
              Update my profile
            </button>
            <button type="button" onClick={handleSignOut} className="deletar">
              Log out
            </button>
          </FormEditRow>
        </Form>
        {store.getState().user.profile.admin ? (
          <NewAccount>
            <Link to="/register">Criar conta gratuita</Link>
          </NewAccount>
        ) : (
          ''
        )}
      </Content>
    </Container>
  );
}

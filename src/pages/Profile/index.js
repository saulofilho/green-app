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
  DownloadData,
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
        <Title>Update your profile. If you need.</Title>
        <Subtitle>
          Change your email, your password and even your name.
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
            <DownloadData>
              <button type="submit">Update my profile</button>
            </DownloadData>
          </FormEditRow>
        </Form>
        <DownloadData>
          <button type="button" onClick={() => handleSignOut()}>
            Log out
          </button>
        </DownloadData>
      </Content>
    </Container>
  );
}

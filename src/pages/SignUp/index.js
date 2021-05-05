import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '../../assets/images/bdd-logo-new-w.png';

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'Mínimo de 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="Botanic Daily Data logotype" />
      <h3>Sign Up</h3>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="payment@email.com" />
        <Input
          name="password"
          type="password"
          placeholder="create a nice password"
        />
        <button type="submit">Create an account</button>
      </Form>
    </>
  );
}

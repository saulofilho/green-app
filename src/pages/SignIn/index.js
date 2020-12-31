import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Granim from 'react-granim';
import logo from '../../assets/images/bdd-logo.svg';
import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="admin@admin.com" />
        <Input name="password" type="password" placeholder="123456" />
        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        {/* <Link to="/register">Criar conta gratuita</Link> */}
      </Form>
      <Granim id="granim" />
    </>
  );
}

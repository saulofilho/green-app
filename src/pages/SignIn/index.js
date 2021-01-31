import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo1green from '../../assets/images/logo-1-green.svg';
import logo2green from '../../assets/images/logo-2-green.svg';
import logo3green from '../../assets/images/logo-3-green.svg';
import logo4green from '../../assets/images/logo-4-green.svg';
import logo5green from '../../assets/images/logo-5-green.svg';
import logo6green from '../../assets/images/logo-6-green.svg';
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

  const logos = [
    logo1green,
    logo2green,
    logo3green,
    logo4green,
    logo5green,
    logo6green,
  ];

  const randomLogo = logos[Math.floor(Math.random() * logos.length)];

  return (
    <>
      <img src={randomLogo} alt="Botanic Daily Data logotype" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="your@email.com" />
        <Input name="password" type="password" placeholder="123456" />
        <button type="submit">{loading ? 'Loading...' : 'Get in'}</button>
        {/* <Link to="/register">Criar conta gratuita</Link> */}
      </Form>
    </>
  );
}

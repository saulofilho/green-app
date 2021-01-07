import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/images/bg-plants.jpg';
import { Wrapper, WrapperHome, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <>
      {children.props.history.location.pathname === '/' ? (
        <WrapperHome>{children}</WrapperHome>
      ) : (
        <Wrapper style={{ backgroundImage: `url(${logo})` }}>
          <Content>{children}</Content>
        </Wrapper>
      )}
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

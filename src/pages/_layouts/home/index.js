import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../../components/Footer';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <h1>header</h1>
      {children}
      <Footer />
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

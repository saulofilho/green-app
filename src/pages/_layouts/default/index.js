import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ScrollBtnTop from '../../../components/ScrollBtnTop';
import ScrollToTop from '../../../services/ScrollToTop';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <ScrollToTop>
        <Header />
        {children}
        <Footer />
        <ScrollBtnTop />
      </ScrollToTop>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import video from '../../../assets/videos/bg-video.mp4';
import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <video src={video} autoPlay loop playsinline muted />
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

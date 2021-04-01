import React, { useState } from 'react';
import { Button } from './styles';

export default function ScrollBtnTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button
      type="button"
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      ↑
    </Button>
  );
}

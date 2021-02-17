import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { parseISO } from 'date-fns';

import { Container, ImgBG, CarouselText } from './styles';

export default function CarouselComponent({ allProjectData }) {
  const settings = {
    className: 'slider variable-width',
    centerMode: true,
    lazyLoad: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    dots: false,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 440,
        settings: {
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
        {allProjectData.map(item => (
          <div key={item.id}>
            <ImgBG
              className="car-items-wrapper"
              style={{
                backgroundImage: `url(${item.img.url})`,
              }}
              alt="foto da chapada dos guimaraes"
            />
            <CarouselText>
              {parseISO(item.createdAt).toLocaleString('en-US', {
                weekday: 'short',
                day: '2-digit',
                month: 'short',
              })}
            </CarouselText>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;

  .slick-prev:before,
  .slick-next:before {
    color: #a7ff83;
  }
`;

export const ImgBG = styled.div`
  width: 780px;
  height: 350px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;
  cursor: grabbing;

  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 550px) {
    width: 300px;
  }
  @media (max-width: 440px) {
    width: 100%;
    margin: 0;
  }
`;

export const CarouselText = styled.p`
  font-size: 0.9rem;
  text-align: center;
`;

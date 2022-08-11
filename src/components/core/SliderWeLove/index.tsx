import React from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import * as Styled from './styles';
import { Container } from '../../../styles/Grid';

const SliderWeLove = () => {
  const settings: SwiperProps = {
    spaceBetween: 10,
    slidesPerView: 6,
    navigation: true
  };
  return (
  <Container>
    <Styled.Wrapper>
      <div className="content">
        <h1>Filmes que amamos »</h1>
        <Swiper {...settings}>
          <SwiperSlide>
            <img
              src="images/cards/card_medium_conjuring.png"
              alt="card medium movies"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/cards/card_medium_sudden.png"
              alt="card medium movies"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/cards/card_medium_tomjerry.png"
              alt="card medium movies"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/cards/card_medium_secretgarden.png"
              alt="card medium movies"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/cards/card_medium_alltalk.png"
              alt="card medium movies"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/cards/card_medium_justice.png"
              alt="card medium movies"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/cards/card_medium_conjuring.png"
              alt="card medium movies"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/cards/card_medium_sudden.png"
              alt="card medium movies"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/cards/card_medium_tomjerry.png"
              alt="card medium movies"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/cards/card_medium_secretgarden.png"
              alt="card medium movies"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/cards/card_medium_alltalk.png"
              alt="card medium movies"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/cards/card_medium_justice.png"
              alt="card medium movies"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Styled.Wrapper>
  </Container>
  );
};

export default SliderWeLove;

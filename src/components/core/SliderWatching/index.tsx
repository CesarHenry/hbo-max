import React from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';
import { Container } from '../../../styles/Grid';

import * as Styled from './styles';

const settings: SwiperProps = {
  slidesPerView: 2.5,
  spaceBetween: 5,
  navigation: true,
  breakpoints: {
    768: {
      slidesPerView: 4.5,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 5.5,
      spaceBetween: 10
    }
  }
};
const SliderWatching = () => {
  return (
    <Container>
      <Styled.Wrapper>
        <div className="content">
          <h1>Continue Assistindo »</h1>
          <Swiper {...settings} modules={[Navigation]}>
            <SwiperSlide>
              <img
                src="images/cards/card_watching_friends.png"
                alt="card watching movies"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/cards/card_watching_secrets.png"
                alt="card watching movies"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/cards/card_watching_mem.png"
                alt="card watching movies"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/cards/card_watching_batman.png"
                alt="card watching movies"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/cards/card_watching_batman.png"
                alt="card watching movies"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/cards/card_watching_batman.png"
                alt="card watching movies"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/cards/card_watching_batman.png"
                alt="card watching movies"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/cards/card_watching_batman.png"
                alt="card watching movies"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default SliderWatching;

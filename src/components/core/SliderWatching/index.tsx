import React from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import * as Styled from './styles';
import { Container } from '../../../styles/Grid';

const SliderWatching = () => {
  const settings: SwiperProps = {
    spaceBetween: 10,
    slidesPerView: 6,
    navigation: true
  };
  return (
    <Container>
      <Styled.Wrapper>
        <div className="content">
          <h1>Continue Assistindo »</h1>
          <Swiper {...settings}>
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
          </Swiper>
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default SliderWatching;

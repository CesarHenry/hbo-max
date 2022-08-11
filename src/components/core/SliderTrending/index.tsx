import React from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import * as Styled from './styles';
import { Container } from '../../../styles/Grid';

const SliderTrending = () => {
  const settings: SwiperProps = {
    spaceBetween: 10,
    slidesPerView: 3,
    navigation: true
  };
  return (
    <Container>
      <Styled.Wrapper>
        <div className="content">
          <h1>Lançamentos »</h1>
          <Swiper {...settings}>
            <SwiperSlide>
              <img src="images/cards/card_tomjerry.png" alt="card movies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/cards/card_gossipgirl.png" alt="card movies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/cards/card_tomjerry.png" alt="card movies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/cards/card_gossipgirl.png" alt="card movies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/cards/card_gossipgirl.png" alt="card movies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/cards/card_tomjerry.png" alt="card movies" />
            </SwiperSlide>
          </Swiper>
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default SliderTrending;

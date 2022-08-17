import React from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import * as Styled from './styles';
import { Container } from '../../../styles/Grid';
import Button from '../Button';

const SliderSeries = () => {
  const settings: SwiperProps = {
    spaceBetween: 10,
    slidesPerView: 4.5,
    navigation: true
  };
  return (
    <Container>
      <Styled.Wrapper>
        <div className="content">
          <div className="information">
            <h1>Séries Aclamadas</h1>
            <p>
              Seus programas favoritos, personagens amados e histórias
              inesquecíveis.
            </p>
            <Button>
              <label>Navegar</label>
            </Button>

          </div>
          <Swiper {...settings}>
            <SwiperSlide>
              <img
                src="images/cards/card_medium_got.png"
                alt="card medium movies"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/cards/card_medium_bigbang.png"
                alt="card medium movies"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/cards/card_medium_west.png"
                alt="card medium movies"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/cards/card_medium_sex.png"
                alt="card medium movies"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/cards/card_medium_bigbang.png"
                alt="card medium movies"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/cards/card_medium_got.png"
                alt="card medium movies"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default SliderSeries;

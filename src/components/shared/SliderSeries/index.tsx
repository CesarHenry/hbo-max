import React from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';

import { Container } from '../../../styles/Grid';
import Button from '../../core/Button';

import * as Styled from './styles';
import instance from '../../../services/api';
import requests from '../../../services/requests';

const settings: SwiperProps = {
  slidesPerView: 3.5,
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

const SliderSeries = () => {
  const [series, setSeries] = React.useState([]);

  React.useEffect(() => {
    instance.get(requests.Serie).then((res) => {
      setSeries(res.data.results);
    });
  }, []);

  console.log(series);

  return (
    <Container>
      <Styled.Wrapper>
        <div className="content">
          <div className="information">
            <h1>
              Séries Aclamadas <span>»</span>
            </h1>
            <p>
              Seus programas favoritos, personagens amados e histórias
              inesquecíveis.
            </p>
            <Button>
              <label>Navegar</label>
            </Button>
          </div>
          <Swiper {...settings} modules={[Navigation]}>
            {series.map((value, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={`${requests.image_url}${value.poster_path}`}
                    alt="card medium movies"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default SliderSeries;

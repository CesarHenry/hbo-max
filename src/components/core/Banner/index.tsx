import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

import * as Styled from './styles';
import instance from '../../../services/api';
import requests from '../../../services/requests';

const settings: SwiperProps = {
  slidesPerView: 1,
  spaceBetween: 5,
  autoplay: {
    delay: 5000
  },
  pagination: {
    dynamicBullets: true
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
};

const Banner = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    instance.get(requests.NowPlaying).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  return (
    <Styled.Wrapper>
      <Swiper {...settings} modules={[Autoplay, Pagination]}>
        {movies.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                className="card"
                src={`${requests.image_url}${value.poster_path}`}
                alt={value.title}
              />

              <img
                className="poster"
                src={`${requests.image_url}${value.backdrop_path}`}
                alt={value.title}
                height="880"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Styled.Wrapper>
  );
};

export default Banner;

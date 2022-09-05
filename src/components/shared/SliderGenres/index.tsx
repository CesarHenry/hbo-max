import React from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';

import * as Styled from './styles';
import { Container } from '../../../styles/Grid';
import instance from '../../../services/api';
import requests from '../../../services/requests';
import { useRouter } from 'next/router';

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
      slidesPerView: 6.5,
      spaceBetween: 10
    }
  }
};

const SliderGenres = () => {
  const [movies, setMovies] = React.useState([]);

  const router = useRouter();

  React.useEffect(() => {
    instance.get(requests.SciFi).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const handleClick = ({ ...value }) => {
    return router.push({
      pathname: '/selected',
      query: { id: `${value.id}`, page: 'SciFi' }
    });
  };
  return (
    <Container>
      <Styled.Wrapper>
        <div className="content">
          <h1>Ficção »</h1>
          <Swiper {...settings} modules={[Navigation]}>
            {movies.map((value, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={`${requests.image_url}${value.poster_path}`}
                    alt={`card ${value.original_title}`}
                    onClick={() => handleClick(value)}
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

export default SliderGenres;

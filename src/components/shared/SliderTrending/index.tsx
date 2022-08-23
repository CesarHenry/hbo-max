import React from 'react';

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import requests from '../../../services/requests';
import instance from '../../../services/api';

import * as Styled from './styles';
import { Container } from '../../../styles/Grid';
import { useRouter } from 'next/router';

const settings: SwiperProps = {
  spaceBetween: 10,
  slidesPerView: 6.5,
  navigation: true
};

const SliderTrending = () => {
  const router = useRouter();

  const [movies, setMovies] = React.useState([]);
  const image_url = 'https://image.tmdb.org/t/p/original';

  React.useEffect(() => {
    instance.get(requests.Trending).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const handleClick = ({ ...value }) => {
    return router.push({
      pathname: '/selected',
      query: { id: `${value.id}`, page: 'Trending'  }
    });
  };
  return (
    <Container>
      <Styled.Wrapper>
        <div className="content">
          <h1>Lançamentos »</h1>
          <Swiper {...settings}>
            {movies.map((value, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    key={index}
                    src={`${image_url}${value.poster_path}`}
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

export default SliderTrending;

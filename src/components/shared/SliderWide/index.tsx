import React, { ReactElement } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';

import requests from '../../../services/requests';
import instance from '../../../services/api';

import * as Styled from './styles';
import { Container } from '../../../styles/Grid';
import { useRouter } from 'next/router';

interface SliderWideProps {
  request: string;
  title: string;
}

const settings: SwiperProps = {
  slidesPerView: 1.5,
  spaceBetween: 5,
  navigation: true,
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 10
    }
  }
};

const SliderWide = ({ request, title }: SliderWideProps): ReactElement => {
  const [movies, setMovies] = React.useState([]);

  const router = useRouter();

  React.useEffect(() => {
    instance.get(requests[String(request)]).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const handleClick = ({ ...value }) => {
    return router.push({
      pathname: '/cine-selected',
      query: { id: `${value.id}`, page: `${request}` }
    });
  };
  return (
    <Container>
      <Styled.Wrapper title={title}>
        <div className="content">
          <h1>{title} »</h1>
          <Swiper
            {...settings}
            modules={[Navigation]}
            className="swiper-container"
          >
            {movies.map((value, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    key={index}
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

export default SliderWide;

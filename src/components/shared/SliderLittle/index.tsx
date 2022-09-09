import React, { ReactElement } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';

import * as Styled from './styles';
import { Container } from '../../../styles/Grid';
import instance from '../../../services/api';
import requests from '../../../services/requests';
import { useRouter } from 'next/router';

interface SliderLittleProps {
  request: string;
  title: string;
}

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

const SliderLittle = ({ request, title }: SliderLittleProps): ReactElement => {
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

export default SliderLittle;

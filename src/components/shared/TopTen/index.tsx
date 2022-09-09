import React, { ReactElement } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Container } from '../../../styles/Grid';

import 'swiper/css';
import 'swiper/css/navigation';
import instance from '../../../services/api';
import requests from '../../../services/requests';
import { useRouter } from 'next/router';
import * as Styled from './styled';

interface TopTenProps {
  request: string;
  title: string;
}

const settings: SwiperProps = {
  slidesPerView: 3.5,
  spaceBetween: 0,
  navigation: true,
  breakpoints: {
    768: {
      slidesPerView: 4.5,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 10
    }
  }
};

const TopTen = ({ request, title }: TopTenProps): ReactElement => {
  const [series, setSeries] = React.useState([]);
  series.length = 10;

  const router = useRouter();

  React.useEffect(() => {
    instance.get(requests[String(request)]).then((res) => {
      setSeries(res.data.results);
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
        <div className="introduction">
          <h1>{title}</h1>
          <p>Não fique de fora das produções mais populares do momento!</p>
        </div>
        <Swiper {...settings} modules={[Navigation]}>
          {series.map((value, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="card">
                  <h2>{index + 1}</h2>
                  <img
                    src={`${requests.image_url}${value.poster_path}`}
                    alt={`card ${value.name}`}
                    onClick={() => handleClick(value)}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Styled.Wrapper>
    </Container>
  );
};

export default TopTen;

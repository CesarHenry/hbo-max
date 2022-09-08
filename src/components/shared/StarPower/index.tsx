import React from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';

import { Container } from '../../../styles/Grid';
import instance from '../../../services/api';
import requests from '../../../services/requests';
import { useRouter } from 'next/router';

import * as Styled from './styles';

const settings: SwiperProps = {
  slidesPerView: 2,
  spaceBetween: 5,
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

const StarPower = () => {
  const [star, setStar] = React.useState([]);

  const router = useRouter();

  React.useEffect(() => {
    instance.get(requests.Persons).then((res) => {
      setStar(res.data.results);
    });
  }, []);

  const handleClick = ({ ...value }) => {
    console.log(value);
    return router.push({
      pathname: '/star-selected',
      query: { id: `${value.id}`, page: 'Persons' }
    });
  };
  return (
    <Container>
      <Styled.Wrapper>
        <div className="content">
          <h1>Stars Power »</h1>
          <Swiper {...settings} modules={[Navigation]}>
            {star.map((value, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="card">
                    <img
                      className="effect"
                      src="images/effect_card.png"
                      alt="effect card"
                      onClick={() => handleClick(value)}
                    />
                    <img
                      src={`${requests.image_url}${value.profile_path}`}
                      alt={`card ${value.name}`}
                    />
                    <div className="title">
                      <h2>Featuring</h2>
                      <h1>{value.name}</h1>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default StarPower;

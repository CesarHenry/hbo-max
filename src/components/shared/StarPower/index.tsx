import React from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Container } from '../../../styles/Grid';
import instance from '../../../services/api';
import requests from '../../../services/requests';
import { useRouter } from 'next/router';

import * as Styled from './styles';

const settings: SwiperProps = {
  spaceBetween: 10,
  slidesPerView: 4.5,
  navigation: true
};

const StarPower = () => {
  const router = useRouter();

  const [star, setStar] = React.useState([]);
  const image_url = 'https://image.tmdb.org/t/p/original';

  React.useEffect(() => {
    instance.get(requests.Star).then((res) => {
      setStar(res.data.cast);
    });
  }, []);

  console.log(star);

  const handleClick = ({ ...value }) => {
    return router.push({
      pathname: '/selected',
      query: { id: `${value.id}`, page: 'TopRated' }
    });
  };
  return (
    <Container>
      <Styled.Wrapper>
        <div className="content">
          <h1>Star Power »</h1>
          <Swiper {...settings}>
            {star.map((value, index) => {
              return (
                <SwiperSlide>
                  <div className="card">
                    <img className="effect" src="images/effect_card.png" alt="" />
                    <img
                      key={index}
                      src={`${image_url}${value.profile_path}`}
                      alt={`card ${value.original_name}`}
                      onClick={() => handleClick(value)}
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

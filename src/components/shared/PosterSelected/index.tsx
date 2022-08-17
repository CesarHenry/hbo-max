import React from 'react';
import { useRouter } from 'next/router';
import instance from '../../../services/api';
import requests from '../../../services/requests';

import * as Styled from './styles';
import { Container } from '../../../styles/Grid';

const PosterSelected = () => {
  const [movies, setMovies] = React.useState([]);
  const image_url = 'https://image.tmdb.org/t/p/original';

  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    instance.get(requests.Trending).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const filtered = movies.filter((item) => {
    return item.id === Number(id);
  });

  console.log(filtered);
  return (
    <Styled.Wrapper>
      {filtered.map((value, index) => {
        return (
          <div key={index}>
            <div className="poster">
              <img src={`${image_url}${value.backdrop_path}`} alt="poster" />
            </div>
            <Container>
              <div className="content">
                <div className="title">
                  <h1>{value.title}</h1>
                  <div className="vote">
                    <h3>{value.vote_average}</h3>
                  </div>
                </div>
                <p>{value.overview}</p>
              </div>
            </Container>
          </div>
        );
      })}
    </Styled.Wrapper>
  );
};

export default PosterSelected;

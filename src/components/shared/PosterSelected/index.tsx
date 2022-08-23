import React from 'react';
import { useRouter } from 'next/router';
import instance from '../../../services/api';
import requests, { api_key } from '../../../services/requests';

import * as Styled from './styles';
import { Container } from '../../../styles/Grid';

const PosterSelected = () => {
  const [movies, setMovies] = React.useState([]);
  const [videos, setVideos] = React.useState([]);
  const image_url = 'https://image.tmdb.org/t/p/original';

  const router = useRouter();
  const { id, page } = router.query;
  const video = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`;

  React.useEffect(() => {
    instance.get(requests[String(page)]).then((res) => {
      setMovies(res.data.results);
    });
    instance.get(video).then((res) => {
      setVideos(res.data.results);
    });
  }, []);

  const filtered = movies?.filter((item) => {
    return item.id === Number(id);
  });

  videos.length = 6;
  return (
    <Styled.Wrapper>
      {filtered?.map((value, index) => {
        return (
          <div key={index}>
            <div className="poster">
              <img src={`${image_url}${value.backdrop_path}`} alt="poster" />
            </div>
            <Container>
              <div className="content">
                <div className="title">
                  <h1>{value.title}</h1>
                </div>
                <p>{value.overview}</p>
                <div className="vote">
                  <h1>Avaliação</h1>
                  <img src="/images/icons/star.svg" alt="icon star" />
                  <div className="container__vote">
                    <h3>{value.vote_average} / 10</h3>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        );
      })}

      <Container>
        <div className="videos">
          {videos?.map((value, index) => {
            return (
              <div key={index}>
                <iframe
                  width="280"
                  height="200"
                  src={`https://www.youtube.com/embed/${value.key}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            );
          })}
        </div>
      </Container>
    </Styled.Wrapper>
  );
};

export default PosterSelected;

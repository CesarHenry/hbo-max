import React from 'react';
import { useRouter } from 'next/router';

import instance from '../../../services/api';
import requests, { api_key } from '../../../services/requests';

import * as Styled from './styles';
import { Container } from '../../../styles/Grid';
import { RingProgress } from '../../core';

const PosterSelected = () => {
  const [movies, setMovies] = React.useState([]);
  const [videos, setVideos] = React.useState([]);

  const router = useRouter();
  const { id, page } = router.query;
  const video = `/movie/${id}/videos?api_key=${api_key}&language=en-US`;

  React.useEffect(() => {
    instance.get(requests[String(page)]).then((res) => {
      setMovies(res.data.results);
    });
    instance.get(video).then((res) => {
      setVideos(res.data.results);
    });
  }, []);

  console.log(movies);

  const filtered = movies?.filter((item) => {
    return item.id === Number(id);
  });

  videos.length = 6;

  return (
    <Container>
      <Styled.Wrapper>
        {filtered?.map((value, index) => {
          return (
            <div className="content" key={index}>
              <div className="poster">
                <img
                  src={`${requests.image_url}${value.poster_path}`}
                  alt="poster"
                />
              </div>
              <div className="infos">
                <div className="title">
                  <h1>{value.title}</h1>
                </div>
                <div className="release">
                  <h1>Lançamento</h1>
                  <h2>{value.release_date}</h2>
                  <h3>Tipo: {value.media_type}</h3>
                </div>
                <div className="sinopse">
                  <h1>Sinopse</h1>
                  <p>{value.overview}</p>
                </div>
                <div className="vote">
                  <h1>Avaliação</h1>
                  <img src="/images/icons/star.svg" alt="icon star" />
                  <div className="container__vote">
                    <RingProgress
                      percentage={value.vote_average.toFixed() * 10}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="videos">
          {videos?.map((value, index) => {
            return (
              <div key={index}>
                <iframe
                  width="280"
                  height="240"
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
      </Styled.Wrapper>
    </Container>
  );
};

export default PosterSelected;

import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import instance from '../../../services/api';
import requests from '../../../services/requests';
import { Container } from '../../../styles/Grid';

import * as Styled from './styles';

interface SectionCinematicProps {
  request: string;
  title: string;
}

const SectionCinematic = ({
  request,
  title
}: SectionCinematicProps): ReactElement => {
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
        <h1>{title} »</h1>
        <div className="content">
          {movies.map((value, index) => {
            return (
              <ul key={index}>
                <li>
                  <img
                    src={`${requests.image_url}${value.poster_path}`}
                    alt={`card ${value.original_title}`}
                    onClick={() => handleClick(value)}
                  />
                </li>
              </ul>
            );
          })}
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default SectionCinematic;

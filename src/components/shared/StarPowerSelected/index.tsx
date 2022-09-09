import { useRouter } from 'next/router';
import React from 'react';

import instance from '../../../services/api';
import requests, { api_key } from '../../../services/requests';

import { Container } from '../../../styles/Grid';
import * as Styled from './styles';

const StarPowerSelected = () => {
  const [star, setStar] = React.useState([]);
  const [person, setPerson] = React.useState([]);

  const router = useRouter();
  const { id, page } = router.query;
  const personsDetails = `/person/${id}?api_key=${api_key}&language=en-US`;

  React.useEffect(() => {
    instance.get(requests[String(page)]).then((res) => {
      setStar(res.data.results);
    });
    instance.get(personsDetails).then((res) => {
      setPerson([res.data]);
    });
  }, []);

  const filtered = star?.filter((item) => {
    return item.id === Number(id);
  });

  return (
    <Container>
      <Styled.Wrapper>
        <div>
          {person.map((value, index) => {
            return (
              <div key={index} className="content">
                <div className="profile">
                  <img
                    src={`${requests.image_url}${value.profile_path}`}
                    alt=""
                  />
                </div>
                <div className="biography">
                  <h1>{value.name}</h1>
                  <h3>
                    <span>Origem: </span>
                    {value.place_of_birth}
                  </h3>
                  <h3>
                    <span>Nascido: </span>
                    {value.birthday}
                  </h3>
                  <h2>Biografia</h2>
                  <p>{value.biography}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="works">
          <h2>Conhecido(a) por </h2>
          {filtered.map(({ known_for }, index) => {
            return (
              <div key={index} className="cards">
                {known_for.map((value, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={`${requests.image_url}${value.poster_path}`}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default StarPowerSelected;

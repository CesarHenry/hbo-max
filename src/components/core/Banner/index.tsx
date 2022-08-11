import Link from 'next/link';
import React from 'react';
import { Container } from '../../../styles/Grid';
import * as Styled from './styles';

const Banner = () => {
  return (
    <Styled.Wrapper>
      <div className="background">
        <img src="images/cover_friends.png" alt="banner home" />
      </div>
      <Container>
        <div className="infos">
          <img src="images/icons/logo_friends.svg" alt="logo friends" />
          <div className="content">
            <h2>Assistir Agora</h2>
            <p>Eles estão de volta ao Central Park, por uma noite apenas.</p>
          </div>
          <div className="content__play">
            <button>
              <img src="images/icons/vector.svg" alt="icon arrow" />
            </button>
            <Link href="#">
              <div className="more__info">
                <a>Saiba Mais</a>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </Styled.Wrapper>
  );
};

export default Banner;

import React from 'react';
import { Container } from '../../../styles/Grid';
import * as Styled from './styles';

const SectionHome = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <div className="content">
          <div className="primary">
            <img
              src="images/Home.png"
              alt="imagem apresentação conteúdos"
            />
          </div>
          <div className="secondary">
            <img
              src="images/Splash.png"
              alt="imagem apresentação conteúdos"
            />

            <img
              src="images/Profile.png"
              alt="imagem apresentação conteúdos"
            />
          </div>
        </div>
      </Container>
    </Styled.Wrapper>
  );
};

export default SectionHome;

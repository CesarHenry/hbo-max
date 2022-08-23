import React from 'react';
import { Container } from '../../../styles/Grid';
import { Button } from '../../core';

import * as Styled from './styles';

const Footer = () => {
  return (
    <Container>
      <Styled.Wrapper>
        <div className="content">
          <div className="logo">
            <img
              src="images/icons/max_originals.svg"
              alt="icon max originals"
            />
            <h3>Gossip Girl: A Bruxa Má</h3>
          </div>
          <div className="content__play">
            <h1>Olá novamente, Upper East Siders.</h1>
            <p>
              Sua única fonte sobre a vida escandalosa de Manhattan elite está
              de volta, com um novo elenco.
            </p>
          </div>
          <Button>
            <label>Assistir</label>
          </Button>
        </div>
        <div className="image">
          <img src="images/image.png" alt="imagem rebeldes" />
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default Footer;

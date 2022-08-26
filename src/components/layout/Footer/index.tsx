import Link from 'next/link';
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
        <div className="contact">
          <Link href="https://github.com/CesarHenry">
            <a className="github" target="_blank">
              <img src="images/icons/icon_github.png" alt="icon github" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/cesar-henry/">
            <a className="linkedin" target="_blank">
              <img src="images/icons/icon_linkedin.png" alt="icon linkedin" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/cesaar_henry/">
            <a className="instagram" target="_blank">
              <img src="images/icons/icon_instagram.png" alt="icon instagram" />
            </a>
          </Link>
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default Footer;

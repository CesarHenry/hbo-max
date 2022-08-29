import Link from 'next/link';
import React from 'react';
import { Container } from '../../../styles/Grid';
import Button from '../Button';
import * as Styled from './styles';

const WhoWatching = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <div className="content">
          <div className="title">
            <img src="images/icons/logo.svg" alt="logo" />
            <h1>Quem está assistindo?</h1>
          </div>
          <div className="profiles">
            <div className="profile">
              <Link href='/home-protected'>
                <img
                  src="images/icons/Profile_male.svg"
                  alt="icon profile male"
                />
              </Link>
              <h3>Jon Snow</h3>
            </div>
            <div className="profile">
              <img
                className="icon__profile"
                src="images/icons/Profile_female.svg"
                alt="icon profile female"
              />
              <h3>Sansa Stark</h3>
            </div>
          </div>
          <div className="manager__profile">
            <div className="manager__buttons">
              <Button>
                <span>+</span>
                <label>Adulto</label>
              </Button>
              <Button>
                <span>+</span>
                <label>Kids</label>
              </Button>
            </div>

            <h3>Perfil Administrador</h3>
          </div>
        </div>
      </Container>
    </Styled.Wrapper>
  );
};

export default WhoWatching;

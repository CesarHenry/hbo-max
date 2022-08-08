import React from 'react';
import { signIn } from 'next-auth/react';

import { Container } from '../../../styles/Grid';
import * as Styled from './styles';

const Header = () => {
  return (
    <Container>
      <Styled.Wrapper>
        <main className="main__menu">
          <div className="logo">
            <img src="images/icons/logo.svg" alt="logo hbo-max" />
          </div>
          <nav className="login">
            <button
              onClick={() => {
                signIn();
              }}
            >
              <img src="images/icons/user.svg" alt="icon user" />
            </button>
          </nav>
        </main>
      </Styled.Wrapper>
    </Container>
  );
};

export default Header;

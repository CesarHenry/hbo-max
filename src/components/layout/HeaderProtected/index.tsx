import Link from 'next/link';
import React from 'react';
import { Container } from '../../../styles/Grid';
import * as Styled from './styles';

const HeaderProtected = () => {
  return (
    <Container>
      <Styled.Wrapper>
        <main className="main__menu">
          <div className="actions">
            <button>
              <span />
              <span className="small" />
              <span />
            </button>
            <Link href="#">
              <a>
                <img src="images/icons/search.svg" alt="icon search" />
              </a>
            </Link>
          </div>
          <div className="logo">
            <img src="images/icons/logo.svg" alt="logo hbo-max" />
          </div>
          <div className="icon__profile">
            <img src="images/icons/profile_male.svg" alt="icon user" />
            <h3>Jon Snow</h3>
          </div>
        </main>
      </Styled.Wrapper>
    </Container>
  );
};

export default HeaderProtected;

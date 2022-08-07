import React from 'react';
import Head from 'next/head';
import { SectionHome } from '../components/core';
import { Container } from '../styles/Grid';
import { Header } from '../components/layout';
import * as Styled from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Styled.Wrapper>
        <Head>
          <title>HBO Max</title>
        </Head>

        <Header />
        <div className="banner">
          <SectionHome />
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default Home;

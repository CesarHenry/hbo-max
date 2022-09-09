import React from 'react';
import { NextPage } from 'next';
import { SectionCinematic, SliderWide, TopTen } from '../components/shared';

import Base from '../templates/Base';
import { Footer } from '../components/layout';

const SerieAcclaimed: NextPage = (): JSX.Element => {
  return (
    <Base
      title="Séres Aclamadas"
      backgroundColor={'linear-gradient(to top left,#00305C, #40137A, #0F0F0F)'}
    >
      <TopTen title="Top 10 América Latina" request="SerieTopRated" />
      <SliderWide title="Os mais queridinhos" request="SerieLatest" />
      <SectionCinematic title="Quem vai levar o Emmy © para casa?" request="Serie" />
      <Footer />
    </Base>
  );
};

export default SerieAcclaimed;

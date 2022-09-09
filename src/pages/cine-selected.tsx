import React from 'react';
import { Footer } from '../components/layout';
import { PosterSelected } from '../components/shared';
import Base from '../templates/Base';

const CineSelected = () => {
  return (
    <Base title='Obras Cinematograficas' backgroundColor={'linear-gradient(to top left,#00305C, #40137A, #0F0F0F)'}>
      <PosterSelected />
      <Footer />
    </Base>
  );
};

export default CineSelected;

import React from 'react';
import { Footer } from '../components/layout';
import { PosterSelected } from '../components/shared';
import Base from '../templates/Base';

const Selected = () => {
  return (
    <Base title='Page Movie' backgroundColor={'linear-gradient(to top left,#00305C, #40137A, #0F0F0F)'}>
      <PosterSelected />
      <Footer />
    </Base>
  );
};

export default Selected;

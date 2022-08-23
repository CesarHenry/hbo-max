import React from 'react';
import { Footer } from '../components/layout';
import { PosterSelected } from '../components/shared';
import Base from '../templates/Base';

const Selected = () => {
  return (
    <Base title='Page Movie' backgroundColor='primary'>
      <PosterSelected />
      <Footer />
    </Base>
  );
};

export default Selected;

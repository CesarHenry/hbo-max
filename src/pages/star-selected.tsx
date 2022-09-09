import React from 'react';
import { Footer } from '../components/layout';
import { StarPowerSelected } from '../components/shared';
import Base from '../templates/Base';

const StarSelected = () => {
  return (
    <Base title='Estrelas' backgroundColor={'linear-gradient(to top left,#00305C, #40137A, #0F0F0F)'}>
      <StarPowerSelected />
      <Footer />
    </Base>
  );
};

export default StarSelected;

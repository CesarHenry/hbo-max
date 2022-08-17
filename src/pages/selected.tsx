import React from 'react';
import { Footer, HeaderProtected } from '../components/layout';
import { PosterSelected } from '../components/shared';

import * as Styled from './styles';

const Selected = () => {
  return (
    <Styled.WrapperSelected>
      <HeaderProtected />
      <PosterSelected />
    </Styled.WrapperSelected>
  );
};

export default Selected;

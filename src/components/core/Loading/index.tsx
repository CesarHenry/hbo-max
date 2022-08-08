import React from 'react';
import { Container } from '../../../styles/Grid';
import * as Styled from './styles';

const Loading = () => {
  return (
    <Container>
      <Styled.Wrapper>
        <div className="logo">
          <img src="images/icons/logo.svg" alt="" />
        </div>
        <div id="progressbar">
          <span id="loading"></span>
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default Loading;

import React from 'react';
import { Banner, SliderTrending, SliderWeLove } from '../components/core';
import { HeaderProtected } from '../components/layout';

const HomeProtected = () => {
  return (
    <>
      <HeaderProtected />
      <Banner />
      <SliderTrending />
      <SliderWeLove />
    </>
  );
};

export default HomeProtected;

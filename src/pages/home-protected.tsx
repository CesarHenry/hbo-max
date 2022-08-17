import React from 'react';
import {
  Banner,
  SliderSeries,
  SliderWatching,
  SliderWeLove
} from '../components/core';
import { Footer, HeaderProtected } from '../components/layout';
import { SliderTrending } from '../components/shared';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import * as Styled from './styles';

const HomeProtected = () => {
  const { status, data } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/signin');
  }, [status]);

  if (status === 'authenticated')
    return (
      <Styled.WrapperHome>
        <HeaderProtected />
        <Banner />
        <SliderWatching />
        <SliderTrending />
        <SliderWeLove />
        <SliderSeries />
        <Footer />
      </Styled.WrapperHome>
    );
};

export default HomeProtected;

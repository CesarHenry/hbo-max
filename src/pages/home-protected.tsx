import React from 'react';
import { Banner, Loading, SliderWatching } from '../components/core';
import {
  SliderWide,
  SliderLittle,
  StarPower,
  SliderSeries
} from '../components/shared';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import Base from '../templates/Base';
import { Footer } from '../components/layout';

const HomeProtected = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { status, data } = useSession();

  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    if (status === 'unauthenticated') router.push('/auth/signin');
  }, [status]);

  if (status === 'authenticated')
    return (
      <Base
        backgroundColor={
          'linear-gradient(to top left,#00305C, #40137A, #0F0F0F)'
        }
      >
        {isLoading === true ? (
          <Loading />
        ) : (
          <div>
            <Banner />
            <SliderWatching />
            <SliderWide request="Trending" title="Lançamento" />
            <SliderLittle request="TopRated" title="Filmes que amamos" />
            <SliderSeries />
            <StarPower />
            <SliderLittle request="SciFi" title="Ficção Científica" />
            <Footer />
          </div>
        )}
      </Base>
    );
};

export default HomeProtected;

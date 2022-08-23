import React from 'react';
import {
  Banner,
  Loading,
  SliderSeries,
  SliderWatching
} from '../components/core';
import { SliderTrending, SliderWeLove, StarPower } from '../components/shared';
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
      <Base backgroundColor="secondary">
        {isLoading === true ? (
          <Loading />
        ) : (
          <div>
            <Banner />
            <SliderWatching />
            <SliderTrending />
            <SliderWeLove />
            <SliderSeries />
            <StarPower />
            <Footer />
          </div>
        )}
      </Base>
    );
};

export default HomeProtected;

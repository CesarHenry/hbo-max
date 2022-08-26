import React from 'react';
import { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Loading, WhoWatching } from '../components/core';

const Protected: NextPage = (): JSX.Element => {
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
      <>
        {isLoading === true ? (
          <Loading />
        ) : (
          <>
            <WhoWatching />
          </>
        )}
      </>
    );
};

export default Protected;

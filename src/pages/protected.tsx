import React from 'react';
import { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Protected: NextPage = (): JSX.Element => {
  const { status, data } = useSession();
  const router = useRouter();
  console.log(status);

  React.useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/signin');
  }, [status]);

  if (status === 'authenticated')
    return (
      <div>
        this page is protected
        {JSON.stringify(data.user, null, 2)}
        <button onClick={() => signOut()}></button>
      </div>
    );

  return <div>hello</div>;
};

export default Protected;

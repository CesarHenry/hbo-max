import React from 'react';
import Head from 'next/head';
import { signIn } from 'next-auth/react';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <button
          onClick={() => {
            signIn();
          }}
        >
          Login
        </button>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;

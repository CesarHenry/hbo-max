import React, { FormEventHandler } from 'react';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import * as Styled from './styles';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Container } from '../../styles/Grid';
import { Input } from '../../components/core';

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = React.useState({ user: '', password: '' });
  const [error, setError] = React.useState(null);

  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    //validate userinfo
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      user: userInfo.user,
      password: userInfo.password,
      callbackUrl: '/protected'
    });
    if (res?.error) {
      setError(res.error);
    } else {
      setError(null);
    }
    if (res.url) router.push(res.url);
  };

  return (
    <Container>
      <Styled.Wrapper>
        <div className="login__box">
          <div className="login__title">
            <h1>Login</h1>
          </div>

          <form method="post" className="login__form" onSubmit={handleSubmit}>
            <Input
              label="USERNAME"
              name="user"
              type="text"
              value={userInfo.user}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, user: target.value })
              }
            />

            <Input
              label="PASSWORD"
              name="password"
              type="password"
              value={userInfo.password}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, password: target.value })
              }
            />
            <div className="login__button">
              <button className="btn-outline-primary" type="submit">
                LOGIN
              </button>
              <div className="return">
                <Link href="/">Return ◀ </Link>
              </div>
            </div>
          </form>
          <div className="error">{error}</div>
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default SignIn;

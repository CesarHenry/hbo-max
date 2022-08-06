import React, { FormEventHandler } from 'react';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import * as Styled from './styles';
import { useRouter } from 'next/router';

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
    console.log(res)
  };

  return (
    <Styled.Wrapper>
      <div className="login__box">
        <div className="login__title">
          <h1>Login</h1>
        </div>
        <form method="post" className="login__form" onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="user" className="form__label">
              USERNAME
            </label>
            <input
              className="form__control"
              value={userInfo.user}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, user: target.value })
              }
              type="text"
              name="user"
            />
          </div>
          <div className="form__group">
            <label htmlFor="password" className="form__label">
              PASSWORD
            </label>
            <input
              className="form__control"
              value={userInfo.password}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, password: target.value })
              }
              type="password"
              name="password"
            />
          </div>
          <div className="login__button">
            <button className="btn-outline-primary" type="submit">
              LOGIN
            </button>
          </div>
        </form>
        <div className="error">{error}</div>
      </div>
    </Styled.Wrapper>
  );
};

export default SignIn;

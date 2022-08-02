import React from 'react';
import { Container } from '../../styles/Grid';
import * as Styled from './styles';

const Login = () => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit', {user, password})
  };
  return (
    <Container>
      <Styled.Wrapper>
        <div className="login__box">
          <div className="login__title">
            <h1>Login</h1>
          </div>
          <form method="post" className="login__form" onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="" className="form__label">
                USERNAME
              </label>
              <input
                className="form__control"
                type="text"
                name="user"
                value={user}
                onChange={e => setUser(e.target.value)}
                required="required"
              />
            </div>
            <div className="form__group">
              <label htmlFor="" className="form__label">
                PASSWORD
              </label>
              <input
                type="password"
                name="password"
                value={password}
                required="required"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="login__button">
              <button className="btn-outline-primary" type="submit">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default Login;

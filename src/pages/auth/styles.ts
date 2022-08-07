import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

    .login__box {
      display: flex;
      flex-direction: column;
      width: 500px;
      background: #1a2226;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    .login__title {
      text-align: center;
      margin-top: 15px;
      font-size: 30px;
      letter-spacing: 2px;
      margin-top: 15px;
      font-weight: bold;
      color: #ecf0f5;
    }

    .login__form {
      margin-top: 25px;
      padding: 0 30px;
    }

    .form__group {
      margin-bottom: 20px;
      outline: 0px;
    }

    .form__label {
      font-size: 10px;
      color: #6c6c6c;
      font-weight: bold;
      letter-spacing: 1px;
    }

    input {
      display: flex;
      width: 100%;
      background-color: #1a2226;
      border: none;
      border-bottom: 2px solid ${theme.colors.BLUE};
      font-size: 1rem;
      border-top: 0px;
      border-radius: 0px;
      outline: 0;
      padding: 5px;
      color: #ecf0f5;
    }

    .form__control:focus {
      border-color: inherit;
      -webkit-box-shadow: none;
      box-shadow: none;
      border-bottom: 2px solid ${theme.colors.BLUE};
      outline: 0;
      background-color: #1a2226;
      color: #ecf0f5;
    }

    input:focus {
      outline: none;
      box-shadow: 0 0 0;
    }

    button {
      background: transparent;
      width: 100px;
      height: 50px;
      margin: 20px 0;
      cursor: pointer;
    }

    .btn-outline-primary {
      border-color: ${theme.colors.BLUE};
      color: ${theme.colors.BLUE};
      border-radius: 0px;
      font-weight: bold;
      letter-spacing: 1px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    .btn-outline-primary:hover {
      background: ${theme.colors.BLUE};
      color: white;
    }

    .login__button {
      justify-content: flex-end;
      padding-right: 0px;
      text-align: right;
      margin-bottom: 25px;
    }

    .return {
      justify-content: flex-end;
      color: ${theme.colors.BLUE};
      font-size: 0.9rem;
    }

    .error {
      text-align: center;
      font-weight: bold;
      color: red;
      padding: 10px;
    }
  `}
`;

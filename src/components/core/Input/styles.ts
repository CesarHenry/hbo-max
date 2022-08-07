import styled, { css } from 'styled-components';

interface InputProps {
  hasError?: boolean;
  disabled?: boolean;
}
export const Wrapper = styled.section<InputProps>`
  ${({ theme }) => css`
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
      border-bottom: 2px solid #0db8de;
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
      border-bottom: 2px solid #0db8de;
      outline: 0;
      background-color: #1a2226;
      color: #ecf0f5;
    }

    input:focus {
      outline: none;
      box-shadow: 0 0 0;
    }

  `}`;

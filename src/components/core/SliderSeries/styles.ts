import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 40px;

      img {
        border-radius: 5px;
      }
    }

    .information {
      width: 35%;

      h1 {
        font-size: 1.6rem;
      }

      p {
        margin: 20px 0;
        letter-spacing: 0.5px;
      }
      button {
        width: 120px;
        text-transform: uppercase;
        border: none;
        font-size: 1rem;
        color: ${theme.colors.WHITE};
        background: ${theme.colors.GRADIENT_LOADING};
        border-radius: 20px;
        padding: 10px;
      }
    }
  `}
`;

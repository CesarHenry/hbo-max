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
    }

    button {
      width: 120px;
      font-weight: 700;
      letter-spacing: 1px;
      color: ${theme.colors.WHITE};
      background: ${theme.colors.GRADIENT_BLUE};

      label {
        cursor: pointer;
      }
    }

    button:hover {
      background: ${theme.colors.BLACK_OPACITY};
    }
  `}
`;

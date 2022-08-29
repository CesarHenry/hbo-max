import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 30px;
    padding: 10px 0;
    color: ${theme.colors.WHITE};

    .content {
      width: 50%;

      &__play {
        h1 {
          margin-bottom: 5px;
        }

        margin: 20px 0;
      }
    }

    .logo {
      display: flex;
      align-items: center;

      h3 {
        font-weight: 400;
        margin-left: 10px;
      }
    }

    .image {
      img {
        width: 300px;
      }
    }

    button {
      width: 120px;
      color: ${theme.colors.WHITE};
      background: ${theme.colors.GRADIENT_BLUE};
      font-weight: 700;
      letter-spacing: 0.5px;

      label {
        cursor: pointer;
      }
    }

    button:hover {
      background: ${theme.colors.BLACK_OPACITY};
    }

    .contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .github {
        width: 45px;
        padding: 5px;
      }

      .linkedin {
        width: 65px;
        padding: 10px;
      }

      .instagram {
        width: 60px;
      }
    }

    @media (max-width: ${theme.media.MD}) {
      flex-direction: column;

      .logo {
        display: flex;
        flex-direction: column;

        h3 {
          display: none;
        }
      }

      button {
        display: none;
      }

      .content {
        &__play {
          display: none;
        }
      }

      .image {
        img {
          width: 200px;
        }
      }

      .contact {
        flex-direction: row;
      }
    }
  `}
`;

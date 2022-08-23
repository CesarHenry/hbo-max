import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .poster {
      position: absolute;
      top: 0;

      img {
        width: 100vw;
        height: 100vh;
      }
    }

    .content {
      width: 500px;
      height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      p {
        color: ${theme.colors.WHITE};
        background: ${theme.colors.BLACK_OPACITY};
        letter-spacing: 1px;
        padding: 30px;
        border-radius: 0px 0px 30px 30px;
        z-index: 1;
      }
    }

    .title {
      display: flex;
      justify-content: space-between;
      background: ${theme.colors.BLACK_OPACITY};
      padding: 20px;
      border-radius: 30px 30px 0px 0px;
      z-index: 1;

      h1 {
        font-size: 2.5rem;
        color: ${theme.colors.WHITE};
      }
    }

    .vote {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.LIGHT};
      z-index: 1;

      img {
        margin: 10px;
      }
    }

    .container__vote {
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.GRADIENT_PROFILE};
      border-radius: 10px;
    }

    .videos {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      margin: 30px 0;
      column-gap: 10px;

      iframe {
        border-radius: 10px;
      }
    }

    @media (max-width: ${theme.media.MD}) {
      .poster {
        img {
          width: 100%;
          height: 100%;
        }
      }

      .content {
        width: 100%;
        height: 150px;

        p {
          display: none;
        }
      }

      .title {
        border-radius: 20px;

        h1 {
          font-size: 1.6rem;
        }
      }

      .vote {
        display: none;
      }
    }
  `}
`;

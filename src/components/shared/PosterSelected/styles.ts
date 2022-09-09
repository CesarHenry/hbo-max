import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .content {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding-top: 100px;
    }

    .poster {
      width: 50%;
      img {
        width: 500px;
      }
    }

    .infos {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: ${theme.colors.BLACK_OPACITY};
      padding: 10px 20px;
    }

    .title {
      font-size: 2rem;
      color: ${theme.colors.GOLD};
      text-shadow: 1px 1px 2px ${theme.colors.LIGHT};
    }

    .release {
      width: 400px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: white;
      text-transform: capitalize;
      margin: 20px 0;

      h1,
      h3 {
        font-size: 1.2rem;
        color: ${theme.colors.PURPLE};
      }
    }

    .sinopse {
      padding: 0 20px;

      h1 {
        font-size: 1.6rem;
        color: ${theme.colors.GOLD};
        text-shadow: 1px 1px 1px ${theme.colors.LIGHT};
      }

      p {
        font-size: 1.4rem;
        text-align: justify;
        color: ${theme.colors.WHITE};
        margin: 10px 0;
      }
    }

    .vote {
      color: white;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 10px 0;

      h1 {
        font-size: 1.2rem;
        color: ${theme.colors.PURPLE};
        margin-right: 10px;
      }

      img {
        margin-right: 10px;
      }
    }

    .videos {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      column-gap: 10px;
      padding: 30px 0;
    }

    .series {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      column-gap: 10px;
    }

    @media (max-width: ${theme.media.MD}) {
      .content {
        width: 100%;
        flex-direction: column;
        text-align: center;
      }

      .poster {
        width: 100%;
      }

      .infos {
        width: 100%;

        h1 {
          font-size: 2rem;
        }
      }

      .release {
        width: 100%;
        flex-direction: column;
        h1 {
          font-size: 1.4rem;
        }

        h2 {
          font-size: 1.2rem;
        }
      }

      .sinopse {
        h1 {
          font-size: 1.4rem;
        }

        p {
          font-size: 1rem;
        }
      }

      .vote {
        h1 {
          font-size: 1.4rem;
        }
      }
    }
  `}
`;

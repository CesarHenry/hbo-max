import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .content {
      display: flex;
      align-items: center;
      padding: 100px 0 40px 0;
      color: ${theme.colors.WHITE};
    }

    .profile {
      width: 50%;
      img {
        width: 500px;
      }
    }

    .biography {
      width: 50%;
      padding: 30px;
      background: ${theme.colors.BLACK_OPACITY};

      h1 {
        font-size: 3rem;
        color: ${theme.colors.GOLD};
        text-shadow: 1px 1px 2px ${theme.colors.LIGHT};
        margin-bottom: 10px;
      }

      h2 {
        font-size: 1.8rem;
        color: ${theme.colors.GOLD};
        text-shadow: 1px 1px 2px ${theme.colors.LIGHT};
        margin: 10px 0;
      }

      h3 {
        margin: 5px 0;
        span {
          color: ${theme.colors.PURPLE};
        }
      }

      p {
        text-align: justify;
        margin-top: 10px;
      }
    }

    .works {
      h2 {
        color: ${theme.colors.WHITE};
        font-size: 1.2rem;
      }
    }

    .cards {
      display: flex;
      flex-wrap: wrap;
      padding: 20px 0;
      column-gap: 20px;

      img {
        width: 280px;
        height: 380px;
      }
    }

    @media (max-width: ${theme.media.MD}) {
      .content {
        width: 100%;
        flex-direction: column;
        padding-top: 80px;
      }

      .profile {
        width: 100%;
      }

      .biography {
        width: 100%;
        text-align: center;
        padding: 15px;

        h1 {
          font-size: 1.8rem;
        }

        h2 {
          font-size: 1.4rem;
        }

        h3 {
          font-size: 1rem;
        }
      }

      .cards {
        padding: 0;
        img {
          margin: 10px 0;
        }
      }
    }
  `}
`;

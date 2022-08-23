import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};

    .content {
      width: 100%;
      margin-top: 80px;

      h1 {
        margin-bottom: 10px;
        font-size: 1.2rem;
      }

      img {
        border-radius: 5px;
      }
    }

    img:hover {
      border: 2px solid white;
      cursor: pointer;
    }

    .card {
      position: relative;

      .effect {
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0.5;
      }
    }

    .title {
      width: 100%;
      position: absolute;
      bottom: 0;
      text-align: center;

      h1 {
        color: ${theme.colors.GOLD};
        font-size: 1.6rem;
        font-weight: 400;
        text-shadow: 2px 2px 2px black;
      }

      h2 {
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 2px;
        text-shadow: 2px 2px 2px black;

      }
    }
  `}
`;

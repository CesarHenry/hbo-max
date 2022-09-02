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
        cursor: pointer;
      }
    }

    img:hover {
      border: 2px solid ${theme.colors.LIGHT};
    }

    .information {
      width: 100%;

      h1 {
        font-size: 1.6rem;
      }

      span {
        display: none;
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

    .swiper-button-next {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 0;
      background: ${theme.colors.BLACK_OPACITY};
      width: 40px;
      height: 60px;
      cursor: pointer;
      z-index: 10;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }

    .swiper-button-prev {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      background: ${theme.colors.BLACK_OPACITY};
      width: 40px;
      height: 60px;
      cursor: pointer;
      z-index: 10;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      color: ${theme.colors.LIGHT};
      font-size: 1.4rem;
    }

    .swiper-button-prev:hover,
    .swiper-button-next:hover {
      background: ${theme.colors.GREY};
    }

    @media (max-width: ${theme.media.MD}) {
      .content {
        width: 100%;
        display: block;

        h1 {
          width: 200px;
          font-size: 1rem;
          margin-bottom: 10px;
        }
      }

      .information {
        span {
          display: initial;
        }

        p {
          display: none;
        }

        button {
          display: none;
        }
      }

      .swiper-button-prev,
      .swiper-button-next {
        display: none;
      }
    }
  `}
`;

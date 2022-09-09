import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};

    .content {
      width: 100%;
      margin-top: 30px;

      h1 {
        margin-bottom: 10px;
        font-size: 1.2rem;
      }

      img {
        border-radius: 5px;
        cursor: pointer;
      }
    }

    img:hover {
      border: 2px solid ${theme.colors.PURPLE};
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

        h1 {
          font-size: 1rem;
        }
      }
    }
  `}
`;

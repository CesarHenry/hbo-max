import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .content {
      width: 100%;
      margin-top: 80px;

      h1 {
        color: ${theme.colors.WHITE};
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
        margin-top: 30px;

        h1 {
          font-size: 1rem;
        }
      }
    }
  `}
`;

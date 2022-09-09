import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding-top: 100px;

    .introduction {
      width: 65%;
      color: ${theme.colors.WHITE};

      h1 {
        font-size: 1.8rem;
      }

      p {
        margin: 10px 0;
      }
    }

    .card {
      position: relative;
      padding: 2px;

      h2 {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;

        width: 40px;
        top: 0;
        left: 0;
        background: ${theme.colors.WHITE};
        font-size: 1.2rem;
        border-radius: 3px;
      }

      img {
        height: 260px;
        border-radius: 5px;
        cursor: pointer;
      }

      img:hover {
        border: 2px solid ${theme.colors.PINK};
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
  `}
`;

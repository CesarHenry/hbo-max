import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .poster {
      width: 100%;
    }

    .card {
      position: absolute;
      bottom: 150px;
      left: 40px;
      width: 350px;
      border-radius: 20px;
      border: 1px solid ${theme.colors.LIGHT};
      box-shadow: 3px 3px 10px white;
    }

    .swiper-pagination-bullet {
      background: var(
        --swiper-pagination-bullet-inactive-color,
        ${theme.colors.WHITE}
      );
    }

    .swiper-pagination-bullet-active {
      background: var(--swiper-pagination-color, ${theme.colors.PINK});
    }

    @media (max-width: ${theme.media.XL}) {
      .card {
        width: 200px;
      }
    }

    @media (max-width: ${theme.media.MD}) {

      .poster {
        width: 100%;
        height: 100%;
      }
      .card {
        display: none;
      }
  `}
`;

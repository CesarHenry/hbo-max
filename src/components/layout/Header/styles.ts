import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .main__menu {
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 99;
    }

    .logo {
      margin: 0 auto;
      width: 250px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 3px solid ${theme.colors.BLUE};
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: transparent;
      transition: all 0.8s ease-in;
      cursor: pointer;

      img {
        width: 30px;
      }
    }

    button:hover {
      transform: scale(1.1);
      background: ${theme.colors.GRADIENT_PROFILE};
    }

    @media (max-width: ${theme.media.MD}) {
      .main__menu {
        height: 100px;
      }

      .logo {
        width: 150px;
      }
    }

  `}
`;

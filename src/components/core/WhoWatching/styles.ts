import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    height: 100vh;
    background: ${theme.colors.GRADIENT_PROFILE};
    position: relative;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 30px 0;

      h1 {
        color: ${theme.colors.WHITE};
        font-weight: 400;
        margin-top: 20px;
      }

      img {
        width: 120px;
      }
    }

    .profiles {
      width: 400px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 150px 0;

      h3 {
        color: ${theme.colors.WHITE};
        font-weight: 400;
        margin-top: 20px;
      }
      img {
        transition: all 0.8s ease-in;
        cursor: pointer;
      }
      img:hover {
        transform: scale(1.1);
      }
    }

    .manager__profile {
      position: absolute;
      bottom: 0;

      h3 {
        font-size: 1rem;
        font-weight: 400;
        text-transform: uppercase;
        color: ${theme.colors.PURPLE};
        margin: 20px 0;
      }
    }

    .manager__buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      column-gap: 20px;
    }

    @media (max-width: ${theme.media.MD}) {
      .profiles {
        width: 100%;
        justify-content: space-around;

        img {
          width: 120px;
        }
      }

      button {
        width: 160px;
        margin: 10px 0;
      }
    }
  `}
`;

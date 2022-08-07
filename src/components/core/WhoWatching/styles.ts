import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    height: 100vh;
    background: ${theme.colors.GRADIENT_PROFILE};

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
      justify-content: space-between;
      margin: 60px 0;

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
      margin-top: 50px;

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
      column-gap: 20px;
    }
  `}
`;

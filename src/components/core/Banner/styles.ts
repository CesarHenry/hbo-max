import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .background {
      position: absolute;
      top: 0;

      img {
        width: 100vw;
      }
    }

    .infos {
      width: 30%;
      height: 500px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      img {
        z-index: 99;
      }
    }

    .content {
      color: ${theme.colors.WHITE};
      margin-top: 30px;
      z-index: 99;

      h2 {
        font-size: 1.4rem;
      }

      p {
        font-size: 1rem;
        letter-spacing: 0.4px;
        margin-top: 5px;
      }

      &__play {
        display: flex;
        align-items: center;
        margin-top: 20px;

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: ${theme.colors.GRADIENT_BLUE};
          margin-right: 20px;
          z-index: 99;
        }

        .more__info {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 35px;
          letter-spacing: 0.6px;
          font-weight: bold;
          background: rgba(255, 255, 255, 0.2);
          color: ${theme.colors.WHITE};
          border: none;
          text-transform: uppercase;
          border-radius: 20px;
          z-index: 99;
        }
      }
    }
  `}
`;

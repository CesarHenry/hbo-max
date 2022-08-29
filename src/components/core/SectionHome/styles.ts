import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    }

    .primary {
      position: relative;
      display: flex;
      justify-content: center;
      z-index: 1;

      img {
        width: 100%;
      }
    }

    .secondary {
      position: absolute;
      display: flex;
      justify-content: center;

      img {
        width: 70%;
      }
    }

    @media (max-width: ${theme.media.MD}) {
      height: 80vh;

      .content {
        position: initial;
        display: flex;
        flex-direction: column;

        img {
          width: 100%;
          border-radius: 10px;
        }
      }

      .secondary {
        width: 100%;
        position: initial;
        flex-direction: column;
        align-items: center;

        img {
          width: 100%;
          margin-top: 10px;
          border-radius: 10px;
        }
      }
    }
  `}
`;

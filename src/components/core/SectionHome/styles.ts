import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    overflow: hidden;

    .content {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    }

    .primary {
      display: flex;
      justify-content: center;
      z-index: 1;

      img {
        width: 80%;
      }
    }

    .secondary {
      position: absolute;
      display: flex;
      justify-content: center;

      img {
        width: 50%;
      }
    }

    @media (max-width: ${theme.media.MD}) {
      overflow: scroll;
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

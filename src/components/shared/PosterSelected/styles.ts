import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`

    .poster {
      position: absolute;
      top: 0;
    }

    .content {
      height: 680px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      p {
        width: 70%;
        color: ${theme.colors.WHITE};
        letter-spacing: 0.5px;
        margin: 20px 0;
        z-index: 1;
      }
    }

    .title {
      display: flex;
      justify-content: space-between;
      z-index: 1;

      h1 {
        font-size: 2.5rem;
        color: ${theme.colors.WHITE};
      }
    }

    .vote {
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.LIGHT};
      background: ${theme.colors.GRADIENT};
      margin-right: 100px;
      border-radius: 20px;
    }
  `}
`;

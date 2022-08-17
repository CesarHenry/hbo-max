import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 30px;
    padding: 20px 0;
    color: ${theme.colors.WHITE};

    .content {
      width: 50%;

      &__play {
        h1 {
          margin-bottom: 5px;
        }

        margin: 20px 0;
      }
    }

    .logo {
      display: flex;
      align-items: center;

      h3 {
        font-weight: 400;
        margin-left: 10px;
      }
    }
  `}
`;

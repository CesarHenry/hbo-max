import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background: transparent;

    .main__menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
    }

    .actions {
      display: flex;
      align-items: center;

      a {
        margin-left: 60px;
      }
    }

    button {
      background-color: inherit;
      padding: 0;
      border: none;
      cursor: pointer;

      span {
        display: block;
        width: 20px;
        height: 1px;
        background: ${theme.colors.LIGHT};

        &:not(:nth-child(3)) {
          margin-bottom: 4px;
        }
      }

      .small {
        width: 15px;
      }
    }

    .logo {
      img {
        width: 120px;
      }
    }

    .icon__profile {
      display: flex;
      align-items: center;
      color: ${theme.colors.WHITE};
      font-size: 0.75rem;

      img {
        width: 50px;
        margin-right: 10px;
      }
    }
  `}
`;

import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding-top: 80px;

    .form__group {
      display: flex;
      align-items: center;
      width: 100%;
    }

    input {
      width: 100%;
      height: 60px;
      border-radius: 5px;
      padding-left: 60px;
      font-size: 1.4rem;
      color: ${theme.colors.WHITE};
      background: ${theme.colors.BLACK_OPACITY};
      border: none;
      margin: 30px 0;
    }

    .icon {
      position: absolute;
      top: 50px;
      left: 20px;

      img {
        width: 25px;
      }
    }

    button {
      display: none;
    }

    h1 {
      color: ${theme.colors.WHITE};
      font-size: 1rem;
      padding: 10px 0;
    }

    .searching,
    ul {
      display: flex;
      flex-wrap: wrap;
      column-gap: 15px;

      li {
        margin-bottom: 15px;

        img {
          width: 200px;
          cursor: pointer;
        }

        img:hover {
          border: 2px solid ${theme.colors.PURPLE};
        }
      }
    }
  `}
`;

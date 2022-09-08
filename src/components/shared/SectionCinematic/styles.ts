import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: 30px 0;
    h1 {
      color: ${theme.colors.WHITE};
      font-size: 1.2rem;
    }

    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      column-gap: 15px;
      margin: 10px 0;

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

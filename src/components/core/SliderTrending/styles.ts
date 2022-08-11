import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .content {
      width: 100%;

      h1 {
        margin-bottom: 10px;
        font-size: 1.2rem;
      }

      img {
        border-radius: 5px;
      }
    }
    color: white;
  `}
`;

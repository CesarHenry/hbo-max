import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    button {
      width: 120px;
      text-transform: uppercase;
      border: none;
      font-size: 1rem;
      color: ${theme.colors.WHITE};
      background: ${theme.colors.GRADIENT_LOADING};
      border-radius: 20px;
      padding: 10px;
    }
  `}
`;

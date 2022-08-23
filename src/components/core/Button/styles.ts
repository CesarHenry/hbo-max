import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      border: none;
      font-size: 1rem;
      border-radius: 20px;
      padding: 10px;
      cursor: pointer;
    }
  `}
`;

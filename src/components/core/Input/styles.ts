import styled, { css } from 'styled-components';

interface InputProps {
  hasError?: boolean;
  disabled?: boolean;
}
export const Wrapper = styled.section<InputProps>`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    display: flex;
  `}
`;

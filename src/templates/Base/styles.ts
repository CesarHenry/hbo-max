import styled, { css } from 'styled-components';

interface BaseProps {
  backgroundColor?: 'primary' | 'secondary';
}

export const Wrapper = styled.div<BaseProps>`
  ${({ theme, backgroundColor }) => css`
    background: ${backgroundColor === 'primary'
      ? theme.colors.BLACK
      : theme.colors.GRADIENT_PROFILE};
  `}
`;

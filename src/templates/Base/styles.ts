import styled, { css } from 'styled-components';

interface BaseProps {
  backgroundColor?: string;
}

export const Wrapper = styled.div<BaseProps>`
  ${({ backgroundColor }) => css`
    ${backgroundColor ? `background: ${backgroundColor}` : null};
  `}
`;

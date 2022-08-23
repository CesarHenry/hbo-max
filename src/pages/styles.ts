import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    .banner {
      position: absolute;
      bottom: 0;
    }

    @media (max-width: ${theme.media.MD}) {
      position: initial;
    }
  `}
`;




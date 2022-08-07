import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      width: 180px;
      height: 35px;
      border-radius: 26px;

      text-transform: uppercase;
      background: rgba(255, 255, 255, 0.2);
      font-size: 1rem;
      font-weight: 700;
      color: ${theme.colors.WHITE};
      cursor: pointer;

      span {
        font-weight: 400;
        font-size: 1.8rem;
        margin-right: 10px;
      }
    }

    button:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  `}
`;

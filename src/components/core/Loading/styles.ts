import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .logo {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #progressbar {
      display: flex;
      align-items: center;
      height: 16px;
      position: absolute;
      left: 50%;
      bottom: 10%;
      width: 200px;
      background: rgba(159, 159, 159, 0.5);
      border-radius: 10px;
      margin: -20px 0 0 -100px;
    }
    #loading {
      transition: all 2ms ease;
      height: 10px;
      width: calc(100% - 10px);
      border-radius: 8px;
      background: ${theme.colors.GRADIENT_LOADING};
      position: absolute;
      margin: 3px;
      display: inline-block;
      animation: load 3s ease infinite;
    }
    #load {
      font-family: Arial;
      font-weight: bold;
      text-align: center;
      margin-top: -30px;
    }

    @keyframes load {
      0% {
        width: 5%;
      }
      10% {
        width: 20%;
      }
    }
  `}
`;

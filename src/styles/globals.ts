import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body,
    #__next {
      min-height: 100%;
    }

    body {
      background: ${theme.colors.GRADIENT};
      color: ${theme.colors.text};
      font: 400 16px Roboto, sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    ul,
    li,
    a {
      text-decoration: none;
      list-style: none;
    }
  `}`

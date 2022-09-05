import styled, { css } from 'styled-components';

interface SideBarProps {
  isOpen: boolean;
}

interface DropdownProps {
  dropdown: boolean;
}

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    position: fixed;
    z-index: 99;

    .main__menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0;
    }

    .actions {
      display: flex;
      align-items: center;

      a {
        margin-left: 60px;
      }
    }

    button {
      background: inherit;
      padding: 0;
      border: none;
      cursor: pointer;

      span {
        display: block;
        width: 20px;
        height: 1px;
        background: ${theme.colors.LIGHT};

        &:not(:nth-child(3)) {
          margin-bottom: 4px;
        }
      }

      .small {
        width: 15px;
      }
    }

    .logo {
      cursor: pointer;
      img {
        width: 120px;
      }
    }

    .icon__profile {
      display: flex;
      align-items: center;
      color: ${theme.colors.WHITE};
      font-size: 0.75rem;

      img {
        width: 50px;
        margin-right: 10px;
      }
    }

    @media (max-width: ${theme.media.MD}) {
      .main__menu {
        width: 100vw;
        display: flex;
        justify-content: space-around;
        padding: 5px 0;
      }

      .actions {
        a {
          display: none;
        }
      }

      .icon__profile {
        h3 {
          display: none;
        }
      }
    }
  `}
`;

export const WrapperSideBar = styled.section<SideBarProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    display: flex;
    flex-direction: column;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 100vh;
    left: 0;
    top: 0;
    transform: translateX(-200%);
    transition: all 200ms cubic-bezier(0.95, 0.05, 0.795, 0.035);
    background-color: ${theme.colors.BLACK};
    max-width: 300px;
    width: 100%;
    z-index: 999999;

    ${isOpen && 'transform: translateX(0%);'}
    }

    .content {
      display: flex;
      align-items: flex-start;
      padding: 40px 20px;
      font-size: 1rem;
      height: 80vh;
      overflow: auto;

      a {
        display: flex;
        align-items: center;
        width: 250px;
        height: 45px;

        font-weight: 400;
        color: ${theme.colors.WHITE};
        vertical-align: sub;
        display: flex;
        align-items: center;
        padding: 12px 16px;
        transition: background-color 0.3s ease-in-out;
      }

      a:hover {
        background-color: ${theme.colors.PINK};
      }

      .header {
        button {
          position: absolute;
          top: 0;
          right: 10px;
          color: white;
          padding: 15px;
        }
      }

      @media (max-width: ${theme.media.MD}) {
        a {
          height: 65px;
        }

        img {
          width: 30px;
        }
      }
      `}
`;

export const Backdrop = styled.div<SideBarProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    background-color: ${theme.colors.BLACK_OPACITY};
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    z-index: 9999;

    ${isOpen && 'opacity: 1; visibility: visible;'}
  `}
`;

export const Dropdown = styled.div<DropdownProps>`
  ${({ dropdown }) => css`
    visibility: hidden;
    opacity: 0;
    z-index: 9999;

    ${dropdown && 'opacity: 1; visibility: visible;'}
  `}
`;

export const WrapperDropdown = styled.div`
  ${({ theme }) => css`
    position: relative;

    .nav {
      position: absolute;
      top: 80px;
      right: 0;
      width: 150px;
    }

    .dropdown__menu {
      text-align: center;
      border-radius: 5px;
      background: ${theme.colors.BLACK};

      li {
        padding: 10px;
      }

      a {
        color: ${theme.colors.WHITE};
      }
    }

    li:hover {
      background: ${theme.colors.PINK};
    }

    .logout {
      border-top: 1px solid ${theme.colors.WHITE};
    }
  `}
`;

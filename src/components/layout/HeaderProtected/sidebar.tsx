import Link from 'next/link';
import React, { ReactElement } from 'react';

import * as Styled from './styles';

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const SideBar = ({ isOpen = false, setIsOpen }: SideBarProps): ReactElement => {
  const handleToggle = (): void => {
    setIsOpen(false);
  };
  return (
    <Styled.Backdrop isOpen={isOpen} onClick={handleToggle}>
      <Styled.WrapperSideBar isOpen={isOpen}>
        <div className="content">
          <div className="header">
            <button onClick={handleToggle}>X</button>
          </div>
          <ul>
            <li>
              <Link href="/home-protected">
                <a>Início</a>
              </Link>
            </li>
            <li>
              <Link href="/serie-acclaimed">
                <a>Séries</a>
              </Link>
            </li>
            <li>
              <Link href="/movie-acclaimed">
                <a>Filmes</a>
              </Link>
            </li>
            <li>
              <Link href="/search">
                <a>Pesquisar</a>
              </Link>
            </li>
          </ul>
        </div>
      </Styled.WrapperSideBar>
    </Styled.Backdrop>
  );
};

export default SideBar;

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
          <ul>
            <li>
              <Link href="#">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Séries</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Filmes</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Stars Powers</a>
              </Link>
            </li>
          </ul>
        </div>
      </Styled.WrapperSideBar>
    </Styled.Backdrop>
  );
};

export default SideBar;

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React, { ReactElement } from 'react';

import * as Styled from './styles';

interface DropdownProps {
  dropdownOpen: boolean;
  setDropdownIsOpen: (value: boolean) => void;
}

const Dropdown = ({
  dropdownOpen = false,
  setDropdownIsOpen
}: DropdownProps): ReactElement => {
  const handleToggle = (): void => {
    setDropdownIsOpen(false);
  };

  console.log(dropdownOpen);

  return (
    <Styled.Dropdown dropdownOpen={dropdownOpen} onClick={handleToggle}>
      <Styled.WrapperDropdown>
        <div className="nav">
          <ul className="dropdown__menu">
            <li>
              <Link href="#">
                <a>Minha Conta</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Mudar de Perfil</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Configurações</a>
              </Link>
            </li>
            <li className="logout">
              <a onClick={() => {
                  signOut();
                }}
              >
                Sair
              </a>
            </li>
          </ul>
        </div>
      </Styled.WrapperDropdown>
    </Styled.Dropdown>
  );
};

export default Dropdown;

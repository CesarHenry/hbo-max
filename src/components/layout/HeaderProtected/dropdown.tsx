import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React, { ReactElement } from 'react';

import * as Styled from './styles';

interface DropdownProps {
  dropdown: boolean;
  setDropdown: (value: boolean) => void;
}

const Dropdown = ({ dropdown = false, setDropdown }: DropdownProps): ReactElement => {
  const handleToggle = (): void => {
    setDropdown(false);
  };

  return (
    <Styled.Dropdown dropdown={dropdown} onClick={handleToggle}>
      <Styled.WrapperDropdown>
        <div className="nav">
          <ul className="dropdown__menu">
            <li>
              <Link href="#">
                <a>Minha Conta</a>
              </Link>
            </li>
            <li>
              <Link href="/protected">
                <a>Mudar de Perfil</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Configurações</a>
              </Link>
            </li>
            <li className="logout">
              <a
                onClick={() => {
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

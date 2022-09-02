import Link from 'next/link';
import React from 'react';
import { Container } from '../../../styles/Grid';
import Dropdown from './dropdown';
import SideBar from './sidebar';
import * as Styled from './styles';

const HeaderProtected = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(false);

  return (
    <Styled.Wrapper>
      <Container>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Dropdown
          dropdown={dropdown}
          setDropdown={setDropdown}
        />

        <main className="main__menu">
          <div className="actions">
            <button onClick={() => setIsOpen(!isOpen)} type="button">
              <span />
              <span className="small" />
              <span />
            </button>
            <Link href="/search">
              <a>
                <img src="images/icons/search.svg" alt="icon search" />
              </a>
            </Link>
          </div>
          <div className="logo">
            <Link href="/home-protected">
              <img src="images/icons/logo.svg" alt="logo hbo-max" />
            </Link>
          </div>
          <div className="icon__profile">
            <button
              onClick={() => setDropdown(!dropdown)}
              type="button"
            >
              <img src="images/icons/profile_male.svg" alt="icon user" />
            </button>
            <h3>Jon Snow</h3>
          </div>
        </main>
      </Container>
    </Styled.Wrapper>
  );
};

export default HeaderProtected;

import Link from 'next/link';
import React, { ReactElement, ReactNode } from 'react';
import * as Styled from './styles';

interface ButtonProfileProps {
  children: ReactNode;
}

const ButtonProfile = ({ children }: ButtonProfileProps): ReactElement => {
  return (
    <Styled.Wrapper>
      <Link href="#">
        <button>
          {children}
        </button>
      </Link>
    </Styled.Wrapper>
  );
};

export default ButtonProfile;

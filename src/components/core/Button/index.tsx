import Link from 'next/link';
import React, { ReactElement, ReactNode } from 'react';
import * as Styled from './styles';

interface ButtonProps{
  children: ReactNode;
}

const Button = ({ children }: ButtonProps): ReactElement => {
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

export default Button;

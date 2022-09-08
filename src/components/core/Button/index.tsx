import Link from 'next/link';
import React, { ReactElement, ReactNode } from 'react';
import * as Styled from './styles';

interface ButtonProps {
  children: ReactNode;
  href?: string;
}

const Button = ({ children, href }: ButtonProps): ReactElement => {
  return (
    <Styled.Wrapper>
      <Link href={`${href}`}>
        <button>{children}</button>
      </Link>
    </Styled.Wrapper>
  );
};

export default Button;

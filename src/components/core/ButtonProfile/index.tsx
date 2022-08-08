import Link from 'next/link';
import React, { ReactElement } from 'react';
import * as Styled from './styles';

interface ButtonProfileProps {
  label: string;
}

const ButtonProfile = ({ label }: ButtonProfileProps): ReactElement => {
  return (
    <Styled.Wrapper>
      <Link href="#">
        <button>
          <span>+</span>
          {label}
        </button>
      </Link>
    </Styled.Wrapper>
  );
};

export default ButtonProfile;

import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { Footer, HeaderProtected } from '../../components/layout';

import * as Styled from './styles';

interface BaseProps {
  title?: string;
  backgroundColor?: 'primary' | 'secondary';
  children?: ReactNode;
}

const Base = ({
  title = 'HBO-MAX',
  backgroundColor,
  children,
}: BaseProps): ReactElement => {
  return (
    <Styled.Wrapper backgroundColor={backgroundColor}>
      <Head>
        <title>{title}</title>
      </Head>

      <HeaderProtected />
      {children}
    </Styled.Wrapper>
  );
};

export default Base;

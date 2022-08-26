import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { Footer, HeaderProtected } from '../../components/layout';
import { Container } from '../../styles/Grid';
import theme from '../../styles/theme';

import * as Styled from './styles';

interface BaseProps {
  title?: string;
  backgroundColor?: string;
  children?: ReactNode;
}

const Base = ({
  title = 'HBO-MAX',
  backgroundColor,
  children
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

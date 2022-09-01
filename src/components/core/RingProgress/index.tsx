import React, { ReactElement, ReactNode } from 'react';

import * as Styled from './styles';

interface RingProgressProps {
  percentage: ReactNode;
}

const RingProgress = ({ percentage }: RingProgressProps): ReactElement => {
  return (
    <Styled.Wrapper>
      <div className="box" data-percentage={percentage}>
        <div className="percentage">
          <div className="completed active"></div>
        </div>
      </div>
    </Styled.Wrapper>
  );
};

export default RingProgress;

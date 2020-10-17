import React from 'react';

import PageScrollContainer from '../../components/atoms/PageScrollContainer';
import Featured from '../../components/templates/list/Featured';
import Standard from '../../components/templates/list/Standard';

const Discover: React.FC = () => {
  return (
    <PageScrollContainer>
      <Featured />
      <Standard />
    </PageScrollContainer>
  );
};

export default Discover;

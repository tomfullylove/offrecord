import React from 'react';

import PageScrollContainer from '../../components/atoms/PageScrollContainer';
import Featured from '../../components/templates/list/Featured';

const Home: React.FC = () => {
  return (
    <PageScrollContainer>
      <Featured />
    </PageScrollContainer>
  );
};

export default Home;

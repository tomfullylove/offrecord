import React from 'react';

import PageScrollContainer from '../../components/atoms/PageScrollContainer';
import Featured from '../../components/templates/list/Featured';
import Standard from '../../components/templates/list/Standard';

import { Props } from './Screen.container';

const Discover: React.FC<Props> = ({ previews }) => {
  return (
    <PageScrollContainer>
      <Featured />
      <Standard items={previews.standard}/>
    </PageScrollContainer>
  );
};

export default Discover;

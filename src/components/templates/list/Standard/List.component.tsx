import React from 'react';

import Preview from '../../../../components/organisms/previews/Standard';

import { Container, Spacer } from './assets/styles';

interface Props {
  showContent: () => void,
}

const List: React.FC<Props> = ({ showContent }) => {
  return (
    <Container>
      <Preview showContent={showContent} />
      <Spacer />
      <Preview showContent={showContent} />
      <Spacer />
      <Preview showContent={showContent} />
    </Container> 
  );
};

export default List;

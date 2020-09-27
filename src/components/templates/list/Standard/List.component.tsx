import React from 'react';

import Preview from '../../../../components/organisms/previews/Standard';

import { Container, Spacer } from './assets/styles';

const List: React.FC = () => {
  return (
    <Container>
      <Preview />
      <Spacer />
      <Preview />
      <Spacer />
      <Preview />
    </Container>
  );
};

export default List;

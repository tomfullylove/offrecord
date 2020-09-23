import React from 'react';

import Preview from '../../../../components/organisms/previews/Featured';

import { Container, Title, ScrollContainer, Spacer } from './assets/styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>New releases in Cardiff</Title>
      <ScrollContainer>
        <Preview />
        <Spacer />
        <Preview />
      </ScrollContainer>
    </Container>
  );
};

export default Home;

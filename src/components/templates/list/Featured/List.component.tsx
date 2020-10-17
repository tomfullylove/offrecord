import React from 'react';

import Preview from '../../../../components/organisms/previews/Featured';

import { Container, Title, ScrollContainer, Spacer } from './assets/styles';

interface Props {
  showContent: () => void,
}

const List: React.FC<Props> = ({ showContent }) => {
  return (
    <Container>
      <Title>New releases in Cardiff</Title>
      <ScrollContainer>
        <Preview showContent={showContent} />
        <Spacer />
        <Preview showContent={showContent} />
      </ScrollContainer>
    </Container>
  );
};

export default List;

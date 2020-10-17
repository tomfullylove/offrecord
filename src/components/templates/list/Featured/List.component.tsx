import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Preview from '../../../../components/organisms/previews/Featured';

import { Container, Title, ScrollContainer, Spacer } from './assets/styles';

const List: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>New releases in Cardiff</Title>
      <ScrollContainer>
        <Preview showContent={() => navigation.navigate('Content')} />
        <Spacer />
        <Preview showContent={() => navigation.navigate('Content')} />
      </ScrollContainer>
    </Container>
  );
};

export default List;

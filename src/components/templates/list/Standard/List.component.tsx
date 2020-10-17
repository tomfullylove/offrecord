import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Preview from '../../../../components/organisms/previews/Standard';

import { Container, Spacer } from './assets/styles';

const List: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Preview showContent={() => navigation.navigate('Content')} />
      <Spacer />
      <Preview showContent={() => navigation.navigate('Content')} />
      <Spacer />
      <Preview showContent={() => navigation.navigate('Content')} />
    </Container>
  );
};

export default List;

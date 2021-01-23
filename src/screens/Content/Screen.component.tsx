import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  PageContainer,
  TopContainer,
  Header,
  CloseIcon,
} from './assets/styles';

const Content: React.FC = () => {
  const navigation = useNavigation();

  return (
    <PageContainer>
      <TopContainer>
        <Header>Article</Header>
        <CloseIcon onPress={() => navigation.goBack()}/>
      </TopContainer>
    </PageContainer>
  );
};

export default Content;

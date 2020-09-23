import React from 'react';

import {
  Container,
  Backdrop,
  Image,
} from './assets/styles';

const Preview: React.FC = () => {
  return (
    <Container onPress={() => {}}>
      <Image source={require('../../../../../assets/records.jpg')}>
        <Backdrop colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 1)']} />
      </Image>
    </Container>
  );
};

export default Preview;

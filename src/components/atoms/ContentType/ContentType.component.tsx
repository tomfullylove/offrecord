import React from 'react';

import contentTypeStyles from '../../../utils/contentTypeStyles'

import { Container, Text, Line } from './assets/styles';

interface Props {
  type: string,
}

const ContentType: React.FC<Props> = ({ type }) => {
  return (
    <Container width={contentTypeStyles[type.toLowerCase()].width}>
      <Text>{type}</Text>
      <Line color={contentTypeStyles[type.toLowerCase()].color.main} />
    </Container>
  );
};

export default ContentType;

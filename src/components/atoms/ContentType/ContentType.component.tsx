import React from 'react';

import colors from '../../../utils/colors';

import { Container, Text, Line } from './assets/styles';

type ContentStyle = {
    color: string,
    width: string,
};

type ContentStyles = {
  [key: string]: ContentStyle
};

const contentStyles: ContentStyles = {
  'article': { color: colors.main[0], width: '52px' },
  'review': { color: colors.main[1], width: '50px' },
  'interview': {color: colors.main[2], width: '70px'}
};

interface Props {
  type: string,
}

const ContentType: React.FC<Props> = ({ type }) => {
  return (
    <Container width={contentStyles[type.toLowerCase()].width}>
      <Text>{type}</Text>
      <Line color={contentStyles[type.toLowerCase()].color} />
    </Container>
  );
};

export default ContentType;

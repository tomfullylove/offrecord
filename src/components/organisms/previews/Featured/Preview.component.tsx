import React from 'react';

import contentTypeStyles from '../../../../utils/contentTypeStyles';

import {
  Container,
  Backdrop,
  Image,
  Content,
  Title,
  Intro,
  BottomContainer,
  UserContainer,
  Name,
  Dot,
} from './assets/styles';

interface Props {
  showContent: () => void,
  title: string,
  intro: string,
  name: string,
  type: string,
}

const Preview: React.FC<Props> = ({
  showContent,
  title,
  intro,
  name,
  type,
}) => {
  return (
    <Container onPress={showContent}>
      <Image source={require('../../../../../assets/records.jpg')}>
        <Backdrop />
        <Content>
          <Dot color={contentTypeStyles[type.toLowerCase()].color} />
          <Title>{title}</Title>
          <Intro>{intro}</Intro>
          <BottomContainer>
            <UserContainer>
              <Name>{name}</Name>
            </UserContainer>
          </BottomContainer>
        </Content>
      </Image>
    </Container>
  );
};

export default Preview;

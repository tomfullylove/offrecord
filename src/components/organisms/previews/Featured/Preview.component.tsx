import React from 'react';

import {
  Container,
  Backdrop,
  Image,
  Content,
  Title,
  SubTitle,
  BottomContainer,
  Tag,
  Label,
  UserContainer,
  Name,
  Avatar,
} from './assets/styles';

interface Props {
  showContent: () => void,
  title: string,
  subTitle: string,
  name: string,
  type: string,
}

const Preview: React.FC<Props> = ({
  showContent,
  title,
  subTitle,
  name,
  type,
}) => {
  return (
    <Container onPress={showContent}>
      <Image source={require('../../../../../assets/records.jpg')}>
        <Backdrop />
        <Content>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
          <BottomContainer>
            <Tag>
              <Label>{type}</Label>
            </Tag>
            <UserContainer>
              <Name>{name}</Name>
              <Avatar source={require('../../../../../assets/person.jpg')} />
            </UserContainer>
          </BottomContainer>
        </Content>
      </Image>
    </Container>
  );
};

export default Preview;

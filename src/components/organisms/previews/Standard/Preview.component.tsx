import React from 'react';

import {
  Container,
  Title,
  SubTitle,
  BottomContainer,
  UserContainer,
  Avatar,
  NameContainer,
  Name,
  Date,
  Tag,
} from './assets/styles';

interface Props {
  showContent: () => void,
  title: string,
  subTitle: string,
  name: string,
  date: string,
  type: string,
}

const Preview: React.FC<Props> = ({
  showContent,
  title,
  subTitle,
  name,
  date,
  type,
}) => {
  return (
    <Container onPress={showContent}>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <BottomContainer>
        <UserContainer>
          <Avatar source={require('../../../../../assets/person.jpg')} />
          <NameContainer>
            <Name>{name}</Name>
            <Date>{date}</Date>
          </NameContainer>
        </UserContainer>
        <Tag>
          <Name>{type}</Name>
        </Tag>
      </BottomContainer>
    </Container>
  );
};

export default Preview;

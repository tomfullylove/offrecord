import React from 'react';

import {
  Container,
  Type,
  Title,
  SubTitle,
  BottomContainer,
  UserContainer,
  NameContainer,
  Name,
  Date,
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
      <Type>{type}</Type>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <BottomContainer>
        <UserContainer>
          <NameContainer>
            <Name>{name}</Name>
            <Date>{date}</Date>
          </NameContainer>
        </UserContainer>
      </BottomContainer>
    </Container>
  );
};

export default Preview;

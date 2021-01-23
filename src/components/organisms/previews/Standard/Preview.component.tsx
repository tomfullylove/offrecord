import React from 'react';

import ContentType from '../../../atoms/ContentType';

import {
  Container,
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
      <ContentType type={type} />
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

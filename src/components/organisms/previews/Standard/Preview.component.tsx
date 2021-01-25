import React from 'react';

import ContentType from '../../../atoms/ContentType';

import {
  Container,
  Title,
  Intro,
  BottomContainer,
  UserContainer,
  NameContainer,
  Name,
  Date,
} from './assets/styles';

interface Props {
  showContent: () => void,
  title: string,
  intro: string,
  name: string,
  date: string,
  type: string,
}

const Preview: React.FC<Props> = ({
  showContent,
  title,
  intro,
  name,
  date,
  type,
}) => {
  return (
    <Container onPress={showContent}>
      <ContentType type={type} />
      <Title>{title}</Title>
      <Intro>{intro}</Intro>
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

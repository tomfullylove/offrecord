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

const Preview: React.FC = () => {
  return (
    <Container onPress={() => {}}>
      <Title>Cornhole hexagon four dollar toast master cleanse</Title>
      <SubTitle>Lorem ipsum dolor amet chicharrones punk meditation af marfa, cred green juice bluesy bottle</SubTitle>
      <BottomContainer>
        <UserContainer>
          <Avatar source={require('../../../../../assets/person.jpg')} />
          <NameContainer>
            <Name>Tom</Name>
            <Date>2 days ago</Date>
          </NameContainer>
        </UserContainer>
        <Tag>
          <Name>Article</Name>
        </Tag>
      </BottomContainer>
    </Container>
  );
};

export default Preview;

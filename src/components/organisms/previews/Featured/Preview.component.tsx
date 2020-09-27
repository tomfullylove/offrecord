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

const Preview: React.FC = () => {
  return (
    <Container onPress={() => {}}>
      <Image source={require('../../../../../assets/records.jpg')}>
        <Backdrop />
        <Content>
          <Title>Cornhole hexagon four dollar toast master cleanse</Title>
          <SubTitle>Lorem ipsum dolor amet chicharrones punk meditation af marfa, cred green juice bluesy bottle</SubTitle>
          <BottomContainer>
            <Tag>
              <Label>Review</Label>
            </Tag>
            <UserContainer>
              <Name>Tom fully</Name>
              <Avatar source={require('../../../../../assets/person.jpg')} />
            </UserContainer>
          </BottomContainer>
        </Content>
      </Image>
    </Container>
  );
};

export default Preview;

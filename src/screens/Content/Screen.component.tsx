import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  PageContainer,
  TopContainer,
  Header,
  CloseIcon,
  Container,
  Title,
  SubTitle,
  Image,
  ImageText,
  ContentContainer,
  Text,
} from './assets/styles';

const Content: React.FC = () => {
  const navigation = useNavigation();

  return (
    <PageContainer>
      <TopContainer>
        <Header>Article</Header>
        <CloseIcon onPress={() => navigation.goBack()}/>
      </TopContainer>
      <Container>
        <Title>Cornhole hexagon four dollar toast master cleanse</Title>
        <SubTitle>Lorem ipsum dolor amet chicharrones punk meditation af marfa, cred green juice bluesy bottle</SubTitle>
        <Image source={require('../../../assets/gig.jpg')}/>
        <ImageText>Marfa poke hexagon, before they sold out</ImageText>
        <ContentContainer>
          <Text>
            I'm baby man braid tacos single-origin coffee lumbersexual before they sold out vegan enamel pin twee
            raclette migas succulents. Pug organic helvetica raw denim godard tattooed, kitsch iceland 3 wolf moon
            master cleanse mumblecore. Selvage fixie shaman wayfarers literally tbh +1 snackwave tumeric. Celiac
            quinoa health goth intelligentsia tattooed hexagon bushwick venmo. Marfa poke hexagon, before they sold
            out organic hella keytar. Before they sold out adaptogen viral tbh cronut, ethical intelligentsia.
          </Text>
          <Text>
            Celiac quinoa health goth intelligentsia tattooed hexagon bushwick venmo. Marfa poke hexagon, before
            they sold out organic hella keytar. Before they sold out adaptogen viral tbh cronut, ethical intelligentsia.
          </Text>
        </ContentContainer>
      </Container>
    </PageContainer>
  );
};

export default Content;

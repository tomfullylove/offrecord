import React from 'react';
import { useNavigation } from '@react-navigation/native';

import ContentType from '../../components/atoms/ContentType';

import { Props } from './Screen.container';

import {
  PageContainer,
  TopContainer,
  Header,
  CloseIcon,
  ScrollContainer,
  Image,
  Backdrop,
  Title,
  ContentContainer,
  IntroText,
  SubTitle,
  Text,
} from './assets/styles';

const Content: React.FC<Props> = ({ content }) => {
  const navigation = useNavigation();

  return (
    <PageContainer>
      <TopContainer>
        <Header><ContentType type={content.type} /></Header>
        <CloseIcon onPress={() => navigation.goBack()}/>
      </TopContainer>
      <ScrollContainer>
        <Image source={require('../../../assets/records.jpg')}>
          <Backdrop />
          <Title>{content.title}</Title>
        </Image>
        <ContentContainer>
          <IntroText>{content.intro}</IntroText>
          <Text>
            Master cleanse venmo irony raw denim palo santo, heirloom kale
            chips deep v chia slow-carb. Cliche cornhole mlkshk paleo put a bird on it.
            Bicycle rights semiotics brooklyn vaporware art party, roof party lyft.
            Slow-carb craft beer ugh photo booth pickled.
          </Text>
          <SubTitle>
            Fixie meggings williamsburg chambray authentic, aesthetic cray cred.
          </SubTitle>
          <Text>
            Humblebrag 90's pour-over actually af master cleanse umami hashtag truffaut.
            Activated charcoal seitan mlkshk, letterpress wolf +1 raw denim.
          </Text>
          <Text>
            Master cleanse venmo irony raw denim palo santo, heirloom kale chips deep v
            chia slow-carb. Cliche cornhole mlkshk paleo put a bird on it. Bicycle rights
            semiotics brooklyn vaporware art party, roof party lyft. Slow-carb craft beer
            ugh photo booth pickled. Biodiesel viral vape glossier, lo-fi snackwave kombucha
            put a bird on it austin wayfarers.
          </Text>
          <SubTitle>
            Fixie meggings williamsburg chambray authentic, aesthetic cray cred.
          </SubTitle>
          <Text>
          Thundercats viral enamel pin, williamsburg hella blog bicycle rights before they
          sold out fam hell of.
          </Text>
          <Text>
            Vape messenger bag blue bottle pug fam fingerstache beard unicorn. You
            probably haven't heard of them wolf la croix semiotics heirloom fingerstache.
          </Text>
        </ContentContainer>
      </ScrollContainer>
    </PageContainer>
  );
};

export default Content;

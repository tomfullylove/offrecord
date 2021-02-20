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

interface contentBlockProps {
  contentBlock: Array<any>,
}

const ContentBlock: React.FC<contentBlockProps> = ({ contentBlock }) => {
  return (
    <>
      {contentBlock.map((content, index) => (
        <React.Fragment key={`${content.type}-${index}`}>
          {
            content.type == "subTitle" && <SubTitle>{content.text}</SubTitle>
            || content.type == "text" && <Text>{content.text}</Text>
          }
        </React.Fragment>
      ))}
    </>
  );
};

const Content: React.FC<Props> = ({ content }) => {
  const navigation = useNavigation();

  return (
    <PageContainer>
      <TopContainer>
        <Header><ContentType type={content.type} /></Header>
        <CloseIcon onPress={() => navigation.goBack()} />
      </TopContainer>
      <ScrollContainer>
        <Image source={require('../../../assets/records.jpg')}>
          <Backdrop />
          <Title>{content.title}</Title>
        </Image>
        <ContentContainer>
          <IntroText>{content.intro}</IntroText>
          <ContentBlock contentBlock={content.content}/>
        </ContentContainer>
      </ScrollContainer>
    </PageContainer>
  );
};

export default Content;

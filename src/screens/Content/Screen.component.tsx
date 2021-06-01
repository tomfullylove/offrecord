import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import ContentType from '../../components/atoms/ContentType';
import colors from '../../utils/colors';

import { Props } from './Screen.container';

import {
  PageContainer,
  TopContainer,
  Header,
  CloseIcon,
  ScrollContainer,
  MusicContainer,
  PlayIcon,
  Title,
  UserContainer,
  NameContainer,
  Name,
  Date,
  FlameIcon,
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

  const [ playing, setPlaying ] = useState(false);
  const [ liked, setLiked ] = useState(true);

  return (
    <PageContainer>
      <TopContainer>
        <Header>
          <ContentType type={content.type} />
        </Header>
        <CloseIcon onPress={() => navigation.goBack()} />
      </TopContainer>
      <ScrollContainer>
        <ContentContainer>
          <Title>{content.title}</Title>
          <UserContainer>
            <NameContainer>
              <Name>by {content.user.name}</Name>
              <Date>{content.date}</Date>
            </NameContainer>
            <FlameIcon
              color={liked ? colors.flame.main : colors.flame.faint}
              onPress={() => setLiked(!liked)}
            />
          </UserContainer>
          <IntroText>{content.intro}</IntroText>
          <ContentBlock contentBlock={content.content}/>
        </ContentContainer>
      </ScrollContainer>
      {content.type === 'review' && (
        <MusicContainer>
          <PlayIcon
            name={playing ? 'pause-circle' : 'play-circle'}
            onPress={() => setPlaying(!playing)}
          />
        </MusicContainer>
      )}
    </PageContainer>
  );
};

export default Content;

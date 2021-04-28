import React from 'react'

import SearchInput from '../../components/atoms/SearchInput';
import PageScrollContainer from '../../components/atoms/PageScrollContainer';

import contentTypes from '../../utils/contentTypeStyles';
import capitalise from '../../utils/capitalise';

import { SearchContainer, ContentCard, ContentText, ContentSubText } from './assets/styles';

const contentKeys = Object.keys(contentTypes);

const Screen: React.FC = () => {

  return (
    <>
      <SearchContainer>
        <SearchInput />
      </SearchContainer>
      <PageScrollContainer>
        {contentKeys.map((contentKey) => (
          <ContentCard key={contentKey} color={contentTypes[contentKey].color.main}>
            <ContentText color={contentTypes[contentKey].color.text}>{capitalise(contentKey)}</ContentText>
            <ContentSubText color={contentTypes[contentKey].color.text}>Kale chips synth taxidermy freegan schlitz taiyaki chillwave tumblr ethical. Tousled sustainable</ContentSubText>
          </ContentCard>
        ))}
      </PageScrollContainer>
    </>
  );
};

export default Screen;

import React from 'react'

import SearchInput from '../../components/atoms/SearchInput';
import PageScrollContainer from '../../components/atoms/PageScrollContainer';

import { SearchContainer } from './assets/styles';

const Screen: React.FC = () => {

  return (
    <>
      <SearchContainer>
        <SearchInput />
      </SearchContainer>
      <PageScrollContainer>
      </PageScrollContainer>
    </>
  );
};

export default Screen;

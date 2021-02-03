import React, { useEffect } from 'react'

import PageScrollContainer from '../../components/atoms/PageScrollContainer';
import Featured from '../../components/templates/list/Featured';
import Standard from '../../components/templates/list/Standard';

import { Props } from './Screen.container';

const Discover: React.FC<Props> = ({ getContent, loading, featuredContent, standardContent, updateContent }) => {
  useEffect(() => {
    getContent();
  }, []);

  return (
    <PageScrollContainer>
      {!loading && (
        <>
          <Featured title={featuredContent[0].title} items={featuredContent[0].previews} updateContent={updateContent}/>
          <Standard items={standardContent} updateContent={updateContent}/>
        </>
      )}
    </PageScrollContainer>
  );
};

export default Discover;

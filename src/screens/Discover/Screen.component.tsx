import React from 'react';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import PageScrollContainer from '../../components/atoms/PageScrollContainer';
import Featured from '../../components/templates/list/Featured';
import Standard from '../../components/templates/list/Standard';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}

const Discover: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <PageScrollContainer>
      <Featured showContent={() => navigate('Content')} />
      <Standard showContent={() => navigate('Content')} />
    </PageScrollContainer>
  );
};

export default Discover;

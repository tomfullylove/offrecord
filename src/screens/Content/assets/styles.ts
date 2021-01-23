import Styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const PageContainer = Styled.SafeAreaView`
  background-color: ${colors.white};
  height: 100%;
`;

export const TopContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
`;

export const Header = Styled.View`
  flex-grow: 1;
  margin-left: 48px;
  align-items: center;
`;

export const CloseIcon = Styled(Ionicons).attrs({
  name: 'close-outline',
  color: colors.darkGrey,
  size: 32,
})`
  margin-right: 16px;
`;

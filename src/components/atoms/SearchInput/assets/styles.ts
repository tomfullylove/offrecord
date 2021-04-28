import Styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../../../utils/colors';
import fonts from '../../../../utils/fonts';

export const Container = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  background-color: ${colors.background.sub};
  padding: 12px;
`;

export const Icon = Styled(Ionicons).attrs({
  name: 'search',
  color: colors.text.main,
  size: 18,
})`
  margin-right: 6px;
`;

export const Input = Styled.TextInput.attrs({
  placeholder: 'Search',
  placeholderTextColor: colors.text.main,
  returnKeyType: 'search',
})`
  font-family: ${fonts.main.semiBold};
  font-size: 18px;
  flex-grow: 1;
`;

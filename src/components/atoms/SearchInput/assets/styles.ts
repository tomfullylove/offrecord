import Styled from 'styled-components/native';

import colors from '../../../../utils/colors';
import fonts from '../../../../utils/fonts';

export const Input = Styled.TextInput.attrs({
  placeholder: 'Search',
  placeholderTextColor: colors.grey,
  returnKeyType: 'search',
})`
  border-radius: 8px;
  background-color: ${colors.lightGrey};
  font-family: ${fonts.main.semiBold};
  padding: 12px;
  font-size: 20px;
`;

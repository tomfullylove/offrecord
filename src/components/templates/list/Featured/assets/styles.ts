import Styled from 'styled-components/native';

import colors from '../../../../../utils/colors';
import fonts from '../../../../../utils/fonts';

export const Container = Styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${colors.lightGrey};
  padding: 16px 0;
`;

export const Title = Styled.Text`
  margin: 0 0 16px 16px;
  font-family: ${fonts.main.bold};
  font-size: 16px;
`;

export const ScrollContainer = Styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingRight: 16,
    paddingLeft: 16,
  },
})``;

export const Spacer = Styled.View`
  width: 16px;
`;

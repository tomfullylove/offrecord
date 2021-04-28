import Styled from 'styled-components/native';

import colors from '../../../../../utils/colors';
import fonts from '../../../../../utils/fonts';

export const Container = Styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background.main};
  padding: 16px 0;
  margin-top: 8px;
`;

export const Title = Styled.Text`
  margin: 0 0 16px 16px;
  font-family: ${fonts.main.semiBold};
  color: ${colors.text.main};
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

import Styled from 'styled-components/native';
import { Pressable } from 'react-native';

import colors from '../../../../../utils/colors';
import fonts from '../../../../../utils/fonts';

export const Container = Styled(Pressable)`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const Title = Styled.Text.attrs({
  numberOfLines: 2,
})`
  font-family: ${fonts.main.bold};
  font-size: 20px;
  margin: 12px 0 6px;
`;

export const Intro = Styled.Text.attrs({
  numberOfLines: 2,
})`
  color: ${colors.darkGrey};
  font-family: ${fonts.main.semiBold};
  font-size: 14px;
`;

export const BottomContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

export const UserContainer = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NameContainer = Styled.View`
  display: flex;
  flex-direction: column;
`;

export const Name = Styled.Text`
  font-family: ${fonts.main.semiBold};
  font-size: 14px;
  margin-bottom: 4px;
`;

export const Date = Styled.Text`
  color: ${colors.darkGrey};
  font-family: ${fonts.main.regular};
  font-size: 12px;
`;

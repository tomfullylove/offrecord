import Styled from 'styled-components/native';
import { Pressable } from 'react-native';

import colors from '../../../../../utils/colors';
import fonts from '../../../../../utils/fonts';

export const Container = Styled(Pressable)`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const Title = Styled.Text`
  font-family: ${fonts.main.bold};
  font-size: 20px;
  margin-bottom: 8px;
`;

export const SubTitle = Styled.Text.attrs({
  numberOfLines: 2,
})`
  font-family: ${fonts.main.semiBold};
  font-size: 14px;
`;

export const BottomContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 4px 0;
`;

export const UserContainer = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = Styled.Image`
  height: 32px;
  width: 32px;
  border-radius: 16px;
`;

export const NameContainer = Styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const Name = Styled.Text`
  font-family: ${fonts.main.semiBold};
  font-size: 12px;
`;

export const Date = Styled.Text`
  font-family: ${fonts.main.medium};
  font-size: 10px;
`;

export const Tag = Styled.View`
  height: 32px;
  background-color: ${colors.lightGrey};
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`;

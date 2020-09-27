import Styled from 'styled-components/native';
import { Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../../../utils/colors';
import fonts from '../../../../../utils/fonts';

export const Container = Styled(Pressable)`
  shadow-color: ${colors.shadow};
  shadow-offset: 0px 3px;
  shadow-opacity: 1;
  margin-bottom: 6px;
`;

export const Backdrop = Styled(LinearGradient).attrs({
  colors: [
    'rgba(0, 0, 0, 0.1)',
    'rgba(0, 0, 0, 1)',
  ],
})`
  border-radius: 8px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Image = Styled.ImageBackground`
  height: 248px;
  width: 248px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 8px;
  overflow: hidden;
`;

export const Content = Styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 8px;
`;

export const Title = Styled.Text.attrs({
  numberOfLines: 2,
})`
  font-family: ${fonts.main.bold};
  font-size: 20px;
  margin-bottom: 4px;
  color: ${colors.white};
`;

export const SubTitle = Styled.Text.attrs({
  numberOfLines: 3,
})`
  font-family: ${fonts.main.semiBold};
  font-size: 14px;
  color: ${colors.white};
`;

export const BottomContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

export const Tag = Styled.View`
  height: 24px;
  background-color: ${colors.white};
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
`;

export const Label = Styled.Text`
  font-family: ${fonts.main.semiBold};
  font-size: 12px;
`;

export const UserContainer = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Name = Styled.Text`
  font-family: ${fonts.main.semiBold};
  font-size: 12px;
  color: ${colors.white};
`;

export const Avatar = Styled.Image`
  height: 22px;
  width: 22px;
  border-radius: 12px;
  margin-left: 4px;
`;

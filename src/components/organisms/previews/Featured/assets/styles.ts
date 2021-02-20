import Styled from 'styled-components/native';
import { Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../../../utils/colors';
import fonts from '../../../../../utils/fonts';

interface StyleProps {
  color?: string,
}

export const Container = Styled(Pressable)`
  shadow-color: ${colors.black};
  shadow-offset: 0px 3px;
  shadow-opacity: 0.2;
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
  aspectRatio: 0.85;
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
  padding: 12px;
`;

export const Title = Styled.Text.attrs({
  numberOfLines: 4,
})`
  font-family: ${fonts.main.bold};
  font-size: 32px;
  line-height: 32px;
  color: ${colors.white};
`;

export const Intro = Styled.Text.attrs({
  numberOfLines: 2,
})`
  font-family: ${fonts.main.semiBold};
  font-size: 14px;
  color: ${colors.lightGrey};
`;

export const BottomContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6px;
`;

export const UserContainer = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Name = Styled.Text`
  font-family: ${fonts.main.bold};
  font-size: 12px;
  color: ${colors.white};
`;

export const Dot = Styled.View<StyleProps>`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 15px;
  height: 15px;
  border-radius: 8px;
  background-color: ${({ color }) => color};
`;

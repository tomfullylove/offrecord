import Styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const PageContainer = Styled.SafeAreaView`
  background-color: ${colors.background.main};
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
  color: colors.text.main,
  size: 32,
})`
  margin-right: 16px;
`;

export const ScrollContainer = Styled.ScrollView`
  display: flex;
  flex-direction: column;
`;

export const MusicContainer = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  align-self: center;
  width: 85%;
  margin-top: 16px;
  padding: 16px;
  background-color: #1a1816;
  border-radius: 8px;
`;

export const PlayIcon = Styled(Ionicons).attrs({
  name: 'play',
  color: colors.text.main,
  size: 32,
})`
  margin-right: 16px;
`;

export const Title = Styled.Text`
  margin-top: 250px;
  font-family: ${fonts.main.bold};
  font-size: 28px;
  line-height: 32px;
  color: ${colors.text.main};
  margin-right: 24px;
`;

export const UserContainer = Styled.View`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NameContainer = Styled.View`
  display: flex;
  flex-direction: column;
`;

export const Name = Styled.Text`
  font-family: ${fonts.main.semiBold};
  color: ${colors.text.main};
  font-size: 15px;
  margin-bottom: 4px;
`;

export const Date = Styled.Text`
  color: ${colors.text.main};
  font-family: ${fonts.main.regular};
  font-size: 13px;
`;

export const FlameIcon = Styled(Ionicons).attrs({
  name: 'flame-outline',
  color: colors.text.main,
  size: 32,
})`
`;

export const ContentContainer = Styled.View`
  width: 90%;
  align-self: center;
  display: flex;
  flex-direction: column;
`;

export const IntroText = Styled.Text`
  font-family: ${fonts.main.semiBold};
  font-size: 17px;
  color: ${colors.text.main};
  line-height: 24px;
  margin: 16px 0 8px;
`;

export const SubTitle = Styled.Text`
  font-family: ${fonts.main.bold};
  font-size: 17px;
  color: ${colors.text.main};
  line-height: 24px;
  margin: 16px 0 8px;
`;

export const Text = Styled.Text`
  font-family: ${fonts.main.regular};
  font-size: 17px;
  color: ${colors.text.main};
  line-height: 24px;
  margin: 8px 0;
`;

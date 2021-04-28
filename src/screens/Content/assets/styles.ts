import Styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

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

export const Image = Styled.ImageBackground`
  min-height: 350px;
  aspectRatio: 1;
  width: 90%;
  align-self: center;
  margin: 8px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 8px;
  overflow: hidden;
  padding: 16px;
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

export const Title = Styled.Text`
  font-family: ${fonts.main.bold};
  font-size: 40px;
  line-height: 40px;
  color: ${colors.text.main};
`;

export const UserContainer = Styled.View`
  margin-top: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NameContainer = Styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const UserImage = Styled.Image`
  width: 32px;
  aspectRatio: 1;
  border-radius: 16px;
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
  line-height: 23px;
  margin: 16px 0 8px;
`;

export const SubTitle = Styled.Text`
  font-family: ${fonts.main.bold};
  font-size: 17px;
  color: ${colors.text.main};
  line-height: 23px;
  margin: 16px 0 8px;
`;

export const Text = Styled.Text`
  font-family: ${fonts.main.regular};
  font-size: 17px;
  color: ${colors.text.main};
  line-height: 23px;
  margin: 8px 0;
`;

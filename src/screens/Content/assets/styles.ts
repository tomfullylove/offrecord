import { Pressable } from 'react-native';
import Styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const PageContainer = Styled.SafeAreaView`
  background-color: ${colors.white};
  height: 100%;
`;

export const TopContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
`;

export const Header = Styled.Text`

  font-family: ${fonts.main.semiBold};
  font-size: 12px;
  flex-grow: 1;
  text-align: center;
  margin-left: 48px;
  text-transform: uppercase;
`;

export const CloseIcon = Styled(Ionicons).attrs({
  name: 'close-outline',
  color: colors.grey,
  size: 32,
})`
  margin-right: 16px;
`;

export const Container = Styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  display: flex;
  flex-direction: column;
`;

export const Title = Styled.Text`
  font-family: ${fonts.main.bold};
  font-size: 28px;
  padding: 0 16px;
`;

export const SubTitle = Styled.Text`
  font-family: ${fonts.main.semiBold};
  font-size: 17px;
  color: ${colors.grey};
  padding: 6px 16px 24px;
`;

export const Image = Styled.Image`
  width: 100%;
  height: 250px;
`;

export const ImageText = Styled.Text`
  margin-top: 8px;
  font-family: ${fonts.main.regular};
  font-size: 14px;
  color: ${colors.grey};
  text-align: center;
`;

export const ContentContainer = Styled.View`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

export const Text = Styled.Text`
  margin-top: 24px;
  font-family: ${fonts.main.regular};
  font-size: 17px;
  line-height: 24px;
  letter-spacing: .3px;
`;

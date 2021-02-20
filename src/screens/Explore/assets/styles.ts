import { Pressable } from 'react-native';
import Styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

interface Props {
  color: string,
}

export const SearchContainer = Styled.View`
  background-color: ${colors.white};
  width: 100%;
  padding: 8px 16px 16px;
`;

export const ContentCard = Styled(Pressable)<Props>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${({ color }) => color}
  padding: 16px;
  margin: 8px 16px;
  min-height: 130px;
  border-radius: 8px;
`;

export const ContentText = Styled.Text<Props>`
  color: ${({ color }) => color};
  font-family: ${fonts.main.bold};
  font-size: 24px;
  margin-bottom: 4px;
`;

export const ContentSubText = Styled.Text<Props>`
  color: ${({ color }) => color};
  font-family: ${fonts.main.semiBold};
  font-size: 14px;
`;

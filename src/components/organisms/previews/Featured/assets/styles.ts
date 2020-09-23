import Styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../../../utils/colors';

export const Container = Styled.TouchableOpacity`
  shadow-color: ${colors.shadow};
  shadow-offset: 0px 3px;
  shadow-opacity: 1;
  margin-bottom: 6px;
`;

export const Backdrop = Styled(LinearGradient)`
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

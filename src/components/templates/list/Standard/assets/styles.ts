import Styled from 'styled-components/native';

import colors from '../../../../../utils/colors';

export const Container = Styled.View`
  display: flex;
  flex-direction: column;
`;

export const Spacer = Styled.View`
  background-color: ${colors.background.main};
  height: 8px;
`;

import Styled from 'styled-components/native';

import fonts from '../../../../utils/fonts';

interface StyleProps {
  width?: string,
  color?: string,
}

export const Container = Styled.View<StyleProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
`;

export const Text = Styled.Text`
  align-self: center;
  font-family: ${fonts.main.semiBold};
  font-size: 13px;
  text-transform: uppercase;
  padding: 0 1px 3px;
`;

export const Line = Styled.View<StyleProps>`
  background-color: ${({ color }) => color};
  height: 3px;
`;

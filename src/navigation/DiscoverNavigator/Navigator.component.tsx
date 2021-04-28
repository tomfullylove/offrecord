import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

import Discover from '../../screens/Discover';
import { black } from 'color-name';

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerHideShadow: true,
        headerStyle: { backgroundColor: colors.background.main },
      }}
    >
      <Stack.Screen
        name="Discover"
        component={Discover}
        options={{
          headerLargeTitle: false,
          headerLargeTitleStyle: {
            color: colors.text.main,
            fontFamily: fonts.main.bold,
          },
          headerTitleStyle: {
            color: colors.text.main,
            fontFamily: fonts.main.bold,
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;

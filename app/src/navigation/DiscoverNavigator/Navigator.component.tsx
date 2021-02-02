import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import fonts from '../../utils/fonts';
import Discover from '../../screens/Discover';

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerHideShadow: true,
      }}
    >
      <Stack.Screen
        name="Discover"
        component={Discover}
        options={{
          headerLargeTitle: true,
          headerLargeTitleStyle: {
            fontFamily: fonts.main.bold,
          },
          headerTitleStyle: {
            fontFamily: fonts.main.bold,
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;

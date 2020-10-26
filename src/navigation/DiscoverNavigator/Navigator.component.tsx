import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import fonts from '../../utils/fonts';
import Discover from '../../screens/Discover';
import Content from '../../screens/Content';

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
            fontFamily: fonts.main.semiBold,
          },
          headerTitleStyle: {
            fontFamily: fonts.main.semiBold,
          }
        }}
      />
      <Stack.Screen
        name="Content"
        component={Content}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.main.semiBold,
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;

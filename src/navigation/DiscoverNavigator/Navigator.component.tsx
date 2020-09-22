import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import Discover from '../../screens/Generic';

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
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../utils/colors';

import Discover from '../DiscoverNavigator';
import Map from '../../screens/Map';
import Explore from '../ExploreNavigator';
import Generic from '../../screens/Generic';

const Tab = createBottomTabNavigator();
const Navigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.main[0],
        inactiveTintColor: colors.text.sub,
        style: { 
          backgroundColor: colors.background.main,
          borderTopWidth: 0,
        }
      }}>
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="newspaper-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="map-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Compose"
        component={Generic}
        options={{
          tabBarLabel: 'Compose',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="pencil-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Generic}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;

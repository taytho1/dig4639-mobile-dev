import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import Add from '../screens/Add';
import Profile from '../screens/Profile';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    
    
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} 
    
    tabBarOptions={{
      activeTintColor: '#ffc0cb',
      activeBackgroundColor: '#db7093',
      inactiveBackgroundColor: '#ffc0cb',
      inactiveTintColor: '#db7093',
    }}
    >
      
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused}  name="ios-person" />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Contacts',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-people" />,
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={Add}
        options={{
          title: 'Add Contact',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-person-add" />,
        }}
      />
      
    </BottomTab.Navigator>
    
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Contacts';
    case 'Profile':
      return 'Profile';
    case 'Add':
      return 'Add Contact';
  }
}

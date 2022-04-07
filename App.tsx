import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomePage, SearchPage } from './src/pages';
import appStyles from './src/styles/app.scss';

export default function App(): JSX.Element {
  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName = 'home';
            if (route.name == 'Home') {
              iconName = focused ? 'home' : 'home-outline';
              color = focused ? 'white' : 'grey';
            } else if (route.name == 'Search') {
              iconName = focused ? 'search' : 'search-outline';
              color = focused ? 'white' : 'grey';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: appStyles.tab,
          tabBarActiveTintColor: 'white',
        })}
      >
        <Tabs.Screen
          name='Home'
          component={HomePage}
          options={{
            title: 'Bibliothèque',
            headerStyle: appStyles.header,
            headerShadowVisible: false,
          }}
        />
        <Tabs.Screen
          name='Search'
          component={SearchPage}
          options={{
            title: 'Rechercher',
            headerStyle: appStyles.header,
            headerShadowVisible: false,
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

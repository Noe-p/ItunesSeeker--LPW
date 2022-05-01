import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { appStyle } from './appStyle';
import { HomePage, SearchPage } from './src/pages';
import store from './store';

export default function App(): JSX.Element {
  const Tabs = createBottomTabNavigator();
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
              tabBarStyle: appStyle.tab,
              tabBarActiveTintColor: 'white',
            })}
          >
            <Tabs.Screen
              name='Home'
              component={HomePage}
              options={{
                title: 'Bibliothèque',
                headerShown: false,
              }}
              initialParams={{ goBack: null }}
            />
            <Tabs.Screen
              name='Search'
              component={SearchPage}
              options={{
                title: 'Rechercher',
                headerShown: false,
              }}
              initialParams={{ goBack: null }}
            />
          </Tabs.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

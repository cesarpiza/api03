import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  View
} from 'react-native';
import Home from './home';
import Put from './put';

export default function App() {

  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          options={{
            headerShown: false,
          }}
          name='Home'
          component={Home}
        />
        <Screen
          name='Put'
          component={Put}
        />
      </Navigator>
    </NavigationContainer>
  );
}
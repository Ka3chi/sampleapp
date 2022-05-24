import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './components/LandingScreen';
import SignInScreen from './components/SignInScreen';

import RootStackNavigator from './navigation/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator navigation={undefined}  />
    </NavigationContainer>
  );
}

import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from '../components/LandingScreen';
import SignInScreen from '../components/SignInScreen';

const RootStack = createStackNavigator();

const RootStackNavigator= ({navigation}) => (
    <RootStack.Navigator>
      <RootStack.Screen name="landing" component={LandingScreen} options={{ headerShown: false }} />
      <RootStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
    </RootStack.Navigator>
    
);
export default RootStackNavigator;
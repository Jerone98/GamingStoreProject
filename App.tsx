// In App.js in a new project

import * as React from 'react';
//import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Game ON"
          component={WelcomeScreen}
          options={{
            title: 'Game ON',
            headerShown: false,
            contentStyle: {
              backgroundColor: '#5A5A5A',
            },
            headerStyle: {
              backgroundColor: '#1338BE',
            },
          }}
        />

        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            title: 'Login',
            contentStyle: {
              backgroundColor: '#FFFFFF',
            },

            headerStyle: {
              backgroundColor: '#AD40AF',
            },
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            title: 'SignUp',

            contentStyle: {
              backgroundColor: '#FFFFFF',
            },
            headerStyle: {
              backgroundColor: '#8A2BE2',
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'HomeScreen',
            headerShown: true,

            contentStyle: {
              backgroundColor: '#FFFFFF',
            },
            headerStyle: {
              backgroundColor: '#8A2BE2',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

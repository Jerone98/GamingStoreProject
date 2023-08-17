import * as React from 'react';
import {Button, View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

function WelcomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Image
          source={require('../assets/logingamelogo.png')}
          style={{
            height: 350,
            width: 400,
            resizeMode: 'cover',
          }}
        />
      </View>
      <Button title="Lets Go" onPress={() => navigation.navigate('login')} />
    </View>
  );
}

export default WelcomeScreen;

// ... other code from the previous section

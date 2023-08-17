import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View>
        <Image
          source={require('../assets/signuplogo.png')}
          style={{
            height: 222,
            width: 375,

            marginBottom: 20,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            flex: 1,
            justifyContent: 'centre',
            marginBottom: 30,
          }}>
          Login Screen
        </Text>
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 1}}
          />
          <TextInput
            placeholder="Email ID"
            style={{flex: 1, paddingVertical: 0}}
            keyboardType="email-address"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}>
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 1}}
          />
          <TextInput
            placeholder="Password"
            style={{flex: 1, paddingVertical: 0}}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#AD40AF', fontweight: '700'}}>Forgot?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor: '#AD40AF',
            padding: 20,
            borderRadius: 30,
            marginBottom: 30,
          }}>
          <Text
            style={{
              textAlign: 'centre',
              fontweight: '700',
              fontsize: 16,
              color: '#fff',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'centre', color: '#666', marginBottom: 30}}>
          Or, login with ...
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'centre',
            marginBottom: 0,
          }}
        />

        <Text>New to the app?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')} />
        <Text style={{color: '#AD40AF', fontweight: '700'}}>Register</Text>
      </View>

      <Button
        title="Register"
        onPress={() => navigation.navigate('Signup')}
        style={{
          marginBottom: 0,
          color: '#AD40AF',
        }}
      />
    </View>
  );
}

export default LoginScreen;

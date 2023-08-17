//import React from 'react';
//import {View, Text} from 'react-native';

//function SignupScreen() {
//return (
//<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//<Text>Home Screen</Text>
//</View>
//);
//}

//export default SignupScreen;
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
function SignupScreen({navigation}) {
  return (
    <View style={{justifyContent: 'center'}}>
      <View>
        <Image
          source={require('../assets/registerscreen.png')}
          style={{
            height: 250,
            width: 250,

            marginBottom: -10,
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
          onPress={() => navigation.navigate('Login')}
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
            Create Account
          </Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'centre', color: '#666', marginBottom: 30}}>
          Or, Sign up with ...
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'centre',
            marginBottom: 0,
          }}
        />

        <Text>Already have a Account?</Text>
        <TouchableOpacity onPress={() => {}} />
        <Text style={{color: '#AD40AF', fontweight: '700'}}>
          Log in here XD
        </Text>
      </View>

      <Button
        title="Back to Login"
        onPress={() => navigation.goBack('login')}
        style={{
          marginBottom: 0,
        }}
      />
    </View>
  );
}

export default SignupScreen;

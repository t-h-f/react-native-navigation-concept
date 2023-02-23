import React from 'react';
import {Button, Text, View} from 'react-native';
import useUserStore from '../stores/user';

const LoginScreen = () => {
  const setToken = useUserStore(state => state.setToken);

  const login = () => {
    setToken('abc123');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login to continue</Text>
      <Button title="Login" onPress={login} />
    </View>
  );
};

export default LoginScreen;

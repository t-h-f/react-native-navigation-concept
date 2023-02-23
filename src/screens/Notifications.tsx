import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainScreensParamList} from '@stacks/MainStack';

const NotificationsScreen = () => {
  const nav = useNavigation<NativeStackNavigationProp<MainScreensParamList>>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>0 Notifications</Text>
      <Button title="Back" onPress={() => nav.canGoBack() && nav.goBack()} />
    </View>
  );
};

export default NotificationsScreen;

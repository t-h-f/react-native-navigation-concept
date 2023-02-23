import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {EventsScreensParamList} from '@stacks/EventsStack';

const EventsScreen = () => {
  const nav =
    useNavigation<NativeStackNavigationProp<EventsScreensParamList>>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Your events</Text>
      <Button title="Event 1" onPress={() => nav.navigate('EventScreen')} />
      <Button title="Event 2" onPress={() => nav.navigate('EventScreen')} />
      <Button title="Event 3" onPress={() => nav.navigate('EventScreen')} />
      <Button title="Back" onPress={() => nav.canGoBack() && nav.goBack()} />
    </View>
  );
};

export default EventsScreen;

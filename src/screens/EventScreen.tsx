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
      <Text>Event here</Text>
      <Button title="Back" onPress={() => nav.canGoBack() && nav.goBack()} />
    </View>
  );
};

export default EventsScreen;

import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import {useNavigation, RouteProp, useRoute} from '@react-navigation/native';
import {MainScreensParamList} from '@screens/stacks/MainStack';
import useUserStore from '../stores/user';

type HomeScreenRouteProp = RouteProp<MainScreensParamList, 'HomeScreen'>;

const HomeScreen = () => {
  const route = useRoute<HomeScreenRouteProp>();
  const nav = useNavigation<NativeStackNavigationProp<MainScreensParamList>>();
  const setToken = useUserStore(state => state.setToken);
  const username = route.params?.name || 'User';

  const logout = () => {
    setToken();
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome, {username}</Text>
      <Button title="Events" onPress={() => nav.navigate('EventsStack')} />
      <Button
        title="Notifications"
        onPress={() => nav.navigate('NotificationsScreen')}
      />
      <Button title="Profile" onPress={() => nav.navigate('ProfileScreen')} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;

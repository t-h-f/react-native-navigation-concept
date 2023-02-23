import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import {useNavigation, RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../utils/stack';
import useUserStore from '../stores/user';

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>;

const HomeScreen = () => {
  const route = useRoute<HomeScreenRouteProp>();
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const setToken = useUserStore(state => state.setToken);
  const username = route.params?.name || 'User';

  const logout = () => {
    setToken();
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome, {username}</Text>
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

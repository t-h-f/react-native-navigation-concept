import {NavigatorScreenParams} from '@react-navigation/native';
import {MainScreensParamList} from './MainStack';

export type RootStackParamList = {
  LoginScreen: undefined;
  MainScreens: NavigatorScreenParams<MainScreensParamList>;
};

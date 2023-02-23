import React, {useRef} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// State
import useUserStore from './stores/user';

// Screens
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/ProfileScreen';
import NotificationsScreen from './screens/Notifications';
import EventsScreen from './screens/EventsScreen';
import EventScreen from './screens/EventScreen';

// Stacks
import {RootStackParamList} from '@screens/stacks/RootStack';
import {MainScreensParamList} from '@screens/stacks/MainStack';
import {EventsScreensParamList} from '@screens/stacks/EventsStack';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const MainStack = createNativeStackNavigator<MainScreensParamList>();
const EventsStack = createNativeStackNavigator<EventsScreensParamList>();

function App(): JSX.Element {
  const {token: isLoggedIn} = useUserStore(state => state);
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string>();

  const NavContainerOnReady = () => {
    routeNameRef.current = navigationRef.getCurrentRoute()!.name;
  };

  const NavContainerOnStateChange = async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.getCurrentRoute()!.name;
    const trackScreenView = (currentRouteName: string) => {
      // Track screen view in analytics integration here
      // E.g. analytics.track({ screenViewed: currentRouteName });
      console.log(`Screen viewed: ${currentRouteName}`);
    };

    if (previousRouteName !== currentRouteName) {
      routeNameRef.current = currentRouteName;

      // Replace the line below to add the tracker from a mobile analytics SDK
      await trackScreenView(currentRouteName);
    }
  };

  const EventsStackScreens = () => (
    <EventsStack.Navigator>
      <EventsStack.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{
          headerShown: false,
        }}
      />
      <EventsStack.Screen
        name="EventScreen"
        component={EventScreen}
        options={{
          headerShown: false,
        }}
      />
    </EventsStack.Navigator>
  );

  const MainStackScreens = () => (
    <MainStack.Navigator>
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="EventsStack"
        component={EventsStackScreens}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Group screenOptions={{presentation: 'modal'}}>
        <MainStack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Group>
    </MainStack.Navigator>
  );

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={NavContainerOnReady}
      onStateChange={NavContainerOnStateChange}>
      <RootStack.Navigator>
        {(isLoggedIn && (
          <RootStack.Screen
            name="MainScreens"
            component={MainStackScreens}
            options={{
              headerShown: false,
            }}
          />
        )) || (
          <RootStack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React, {useRef} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// State
import useUserStore from './stores/user';

// Screens
import HomeScreen from './screens/Home';
import LoginScreen from './screens/LoginScreen';
import NotificationsScreen from './screens/Notifications';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const token = useUserStore(state => state.token);
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
      // E.g. nalytics.track({ screenViewed: currentRouteName });
      console.log(`Screen viewed: ${currentRouteName}`);
    };

    if (previousRouteName !== currentRouteName) {
      routeNameRef.current = currentRouteName;

      // Replace the line below to add the tracker from a mobile analytics SDK
      await trackScreenView(currentRouteName);
    }
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={NavContainerOnReady}
      onStateChange={NavContainerOnStateChange}>
      <Stack.Navigator>
        {(!token && (
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
              animationTypeForReplace: 'pop',
            }}
          />
        )) || (
          <>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Group screenOptions={{presentation: 'modal'}}>
              <Stack.Screen
                name="NotificationsScreen"
                component={NotificationsScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Group>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

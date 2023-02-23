import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
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

  return (
    <NavigationContainer>
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

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../res';

const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{animation: 'flip'}}>
        {routes.map((r: any) => (
          <Stack.Screen
            key={r.id}
            name={r.name}
            component={r.component}
            options={{headerShown: false}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackRoutes;

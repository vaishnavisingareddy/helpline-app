import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import ScanScreen from './screens/ScanScreen';
import ConfirmDetailsScreen from './screens/ConfirmDetailsScreen';
import PatientProfileScreen from './screens/PatientProfileScreen';
import FinalScreen from './screens/FinalScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="ConfirmDetails" component={ConfirmDetailsScreen} />
        <Stack.Screen name="PatientProfile" component={PatientProfileScreen} />
        <Stack.Screen name="Final" component={FinalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from './pages/LoginScreen';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigation"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="TabNavigation"
          component={TabNavigation}
        />
        <Stack.Screen 
          name="LoginScreen"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
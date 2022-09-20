import React from "react";
import { StyleSheet, View } from "react-native";
import LoginScreen from "./pages/LoginScreen";
import ChatScreen from "./pages/ChatScreen";
import ChatLiveScreen from "./pages/ChatLiveScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        {/* <Stack.Screen name="ChatScreen" component={ChatScreen} /> */}
        <Stack.Screen name="ChatLiveScreen" component={ChatLiveScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

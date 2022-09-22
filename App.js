import React from "react";
import { StyleSheet, View } from "react-native";
import LoginScreen from "./pages/LoginScreen";
// import ChatScreen from "./pages/ChatScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTap from "./components/BottomTap/BottomTap";
import Home from "./pages/HomeScreen";
// https://www.youtube.com/watch?v=8CpsPbJFa54

const Stack = createNativeStackNavigator();
const Tap = createBottomTabNavigator();

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
        <Stack.Screen name="BottomTap" component={BottomTap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

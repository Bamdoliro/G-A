import React, { useState } from "react";
import * as ReactDom from 'react-dom/client';
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./pages/LoginScreen";
import ChatScreen from "./pages/ChatScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./components/Header/Header";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
          <Stack.Screen name="ChatList" component={Header} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

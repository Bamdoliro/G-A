import { StyleSheet, View } from "react-native";
import LoginScreen from "./pages/LoginScreen";
import ChatScreen from "./pages/ChatScreen";
import ChatLiveScreen from "./pages/ChatLiveScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};


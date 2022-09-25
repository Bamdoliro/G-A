import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './assets/NavigationBar/home.png';
import HomeFilled from './assets/NavigationBar/home-filled.png';
import Community from "./assets/NavigationBar/community.png";
import Chat from "./assets/NavigationBar/chat.png";
import Profile from "./assets/NavigationBar/profile.png";
import HomeScreen from "./pages/HomeScreen";
import CommunityScreen from "./pages/CommunityScreen";
import ChatScreen from "./pages/ChatScreen";
import ProfileScreen from "./pages/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false
        }}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="CommunityScreen" component={CommunityScreen} />
            <Tab.Screen name="ChatScreen" component={ChatScreen} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

import ChatListScreen from "./pages/ChatListScreen";
import ChatLiveScreen from "./pages/ChatLiveScreen";
import GatiProduceScreen from "./pages/GatiProduceScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import TabNavigation from './TabNavigation';
import useSocket from "./hooks/useSocket";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect} from "react";
import SignUpScreen from "./pages/SignUpScreen";
import EmailAuthScreen from "./pages/EmailAuthScreen";
import PinScreen from "./pages/PinScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    const socket = useSocket();

    const subscribeChat = async () => {
        if (await AsyncStorage.getItem("access-token")) {
            socket.current.emit("subscribe");
        }
    }
    useEffect(() => {
        subscribeChat();
    }, [socket]);

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="TabNavigation"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="TabNavigation" component={TabNavigation}/>
                <Stack.Screen name="ChatListScreen" component={ChatListScreen}/>
                <Stack.Screen name="GatiProduceScreen" component={GatiProduceScreen}/>
                <Stack.Screen name="ChatLiveScreen">
                    {props => <ChatLiveScreen {...props} socket={socket} />}
                </Stack.Screen>
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="EmailAuthScreen" component={EmailAuthScreen} />
                <Stack.Screen name="PinScreen" component={PinScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


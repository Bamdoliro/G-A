import ChatListScreen from "./pages/ChatListScreen";
import ChatLiveScreen from "./pages/ChatLiveScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import TabNavigation from './TabNavigation';
import useSocket from "./hooks/useSocket";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";
import LoginScreen from "./pages/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const socket = useSocket();

    const checkIsLoggedIn = async () => {
        const token = await AsyncStorage.getItem("access-token");
        console.log(token)
        if (token) {
            setIsLoggedIn(true)
        }
    }

    const subscribeChat = async () => {
        if (await AsyncStorage.getItem("access-token")) {
            socket.current.emit("subscribe");
        }
    }

    useEffect(() => {
        checkIsLoggedIn();
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
                {isLoggedIn ?
                    <>
                        <Stack.Screen name="TabNavigation" component={TabNavigation}/>
                        <Stack.Screen name="ChatListScreen" component={ChatListScreen}/>
                        <Stack.Screen name="ChatLiveScreen">
                            {props => <ChatLiveScreen {...props} socket={socket}/>}
                        </Stack.Screen>
                    </>
                    :
                    <>
                        <Stack.Screen name="LoginScreen">
                            {props => <LoginScreen {...props} checkIsLoggedIn={checkIsLoggedIn}/>}
                        </Stack.Screen>
                    </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};


import ChatListScreen from "./pages/ChatListScreen";
import ChatLiveScreen from "./pages/ChatLiveScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigation from './TabNavigation';
import useSocket from "./hooks/useSocket";
import { useEffect, useState } from "react";
import LoginScreen from "./pages/LoginScreen";
import { QueryClient, QueryClientProvider } from "react-query";
import { getAccessToken } from "./utils/getToken";
import SignUpScreen from "./pages/SignUpScreen";
import EmailAuthScreen from "./pages/EmailAuthScreen";
import PostDetailScreen from "./pages/PostDetailScreen";


const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
    const [login, setLogin] = useState(null);
    const socket = useSocket();

    const setLoginToken = async () => {
        setLogin(await getAccessToken());
    }

    const subscribeChat = async () => {
        if (await getAccessToken()) {
            socket.current.emit("subscribe");
        }
    }

    useEffect(() => {
        setLoginToken();
        subscribeChat();
    }, [socket]);

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="TabNavigation"
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    {login ?
                        <>
                            {/* <Stack.Screen name="TabNavigation" component={TabNavigation} />
                            <Stack.Screen name="ChatListScreen" component={ChatListScreen} />
                            <Stack.Screen name="ChatLiveScreen">
                                {props => <ChatLiveScreen {...props} socket={socket} />}
                            </Stack.Screen> */}
                            <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} />
                        </>
                        :
                        <>
                            <Stack.Screen name="LoginScreen">
                                {props => <LoginScreen {...props} setLogin={setLoginToken} />}
                            </Stack.Screen>
                            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                            <Stack.Screen name="EmailAuthScreen" component={EmailAuthScreen} />
                        </>
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    );
};


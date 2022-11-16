import ChatListScreen from "./src/screens/ChatListScreen";
import ChatLiveScreen from "./src/screens/ChatLiveScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import TabNavigation from './src/routes/TabNavigation';
import useSocket from "./src/hooks/useSocket";
import {useEffect, useState} from "react";
import LoginScreen from "./src/screens/LoginScreen";
import {QueryClient, QueryClientProvider} from "react-query";
import {getAccessToken} from "./src/utils/storage/token";
import SignUpScreen from "./src/screens/SignUpScreen";
import EmailAuthScreen from "./src/screens/EmailAuthScreen";
import MainNavigation from "./src/routes/MainNavigation";
import AuthNavigation from "./src/routes/AuthNavigation";


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
                {login ?
                    <MainNavigation
                        Stack={Stack}
                        socket={socket}
                    />
                    :
                    <AuthNavigation
                        Stack={Stack}
                        setLoginToken={setLoginToken()}
                    />
                }
            </NavigationContainer>
        </QueryClientProvider>
    );
};


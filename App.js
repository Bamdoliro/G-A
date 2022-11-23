import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useSocket from "./src/hooks/useSocket";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { getAccessToken } from "./src/utils/storage/token";
import MainNavigation from "./src/routes/MainNavigation";
import AuthNavigation from "./src/routes/AuthNavigation";
import SplashScreen from "./src/screens/SplashScreen";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";

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
            socket.current?.emit("subscribe");
        }
    }

    useEffect(() => {
        setLoginToken();
        subscribeChat();
    }, [socket]);

    const [splash, setSplash] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSplash(true);
        }, 1000); // 초 조절 가능
    }, [])

    return (
        splash ? (
            <QueryClientProvider client={queryClient} >
                <NavigationContainer>
                    {login ?
                        <MainNavigation
                            Stack={Stack}
                            setLogout={() => setLogin("")}
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
        ) : (
            <SplashScreen />
        )
    );
};


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
    const [splash, setSplash] = useState(false);
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
        subscribeChat();
    }, [socket]);


    return (
        splash ? (
            <QueryClientProvider client={queryClient} >
              <BottomSheetModalProvider>
                <NavigationContainer>
                    {login ?
                        <MainNavigation
                            Stack={Stack}
                            setLogout={() => {
                                setLogin(null)
                                socket.current?.disconnect();
                            }}
                            socket={socket}
                        />
                        :
                        <AuthNavigation
                            Stack={Stack}
                            setLogin={() => setLoginToken()}
                        />
                    }
                </NavigationContainer>
                </BottomSheetModalProvider>
            </QueryClientProvider>
        ) : (
            <SplashScreen
                setLoginToken={setLoginToken}
                setSplash={setSplash}
            />
        )
    );
};


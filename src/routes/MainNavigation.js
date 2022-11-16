import ChatLiveScreen from "../screens/ChatLiveScreen";
import ChatListScreen from "../screens/ChatListScreen";
import TabNavigation from "./TabNavigation";


export default function MainNavigation({Stack, socket}) {

    return (
        <Stack.Navigator
            initialRouteName="MainNavigation"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="TabNavigation" component={TabNavigation}/>
            <Stack.Screen name="ChatListScreen" component={ChatListScreen}/>
            <Stack.Screen name="ChatLiveScreen">
                {props => <ChatLiveScreen {...props} socket={socket}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
};


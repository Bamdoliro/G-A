import ChatLiveScreen from "../screens/ChatLiveScreen";
import ChatListScreen from "../screens/ChatListScreen";
import TabNavigation from "./TabNavigation";
import PostDetailScreen from "../screens/PostDetailScreen";

import WriteGatiScreen from "../screens/Post/write/WriteGatiScreen";
import WritePostScreen from "../screens/Post/write/WritePostScreen";
import ProduceCommunityScreen from "../screens/ProduceCommunityScreen";
import CommunitySettingScreen from "../screens/CommunitySettingScreen";

export default function MainNavigation({Stack, setLogout, socket}) {

    return (
        <Stack.Navigator
            initialRouteName="MainNavigation"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="TabNavigation">
                {props => <TabNavigation {...props} setLogout={setLogout}/>}
            </Stack.Screen>
            <Stack.Screen name="ChatListScreen" component={ChatListScreen}/>
            <Stack.Screen name="ChatLiveScreen">
                {props => <ChatLiveScreen {...props} socket={socket}/>}
            </Stack.Screen>
            <Stack.Screen name="PostDetailScreen" component={PostDetailScreen}/>
            <Stack.Screen name="WritePostScreen" component={WritePostScreen}/>
            <Stack.Screen name="WriteGatiScreen" component={WriteGatiScreen}/>
            <Stack.Screen name="ProduceCommunityScreen" component={ProduceCommunityScreen}/>
            <Stack.Screen name="CommunitySettingScreen" component={CommunitySettingScreen}/>
        </Stack.Navigator>
    )
};


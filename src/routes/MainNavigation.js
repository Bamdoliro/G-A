import ChatLiveScreen from "../screens/ChatLiveScreen";
import ChatListScreen from "../screens/ChatListScreen";
import TabNavigation from "./TabNavigation";
import PostDetailScreen from "../screens/PostDetailScreen";
import CommunitySettingScreen from "../screens/CommunitySettingScreen";
import CommunityReportScreen from "../screens/CommunityPostWritingScreen";
import CommunityPostModifyScreen from "../screens/CommunityPostModifyScreen";
import CommunityPostWritingScreen from "../screens/CommunityPostWritingScreen";
import WritePostScreen from "../screens/WritePostScreen";
import WriteGatiScreen from "../screens/WriteGatiScreen";
import ProduceCommunityScreen from "../screens/ProduceCommunityScreen";

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
            <Stack.Screen name="CommunitySettingScreen" component={CommunitySettingScreen}/>
            <Stack.Screen name="CommunityReportScreen" component={CommunityReportScreen}/>
            <Stack.Screen name="CommunityPostWritingScreen" component={CommunityPostWritingScreen}/>
            <Stack.Screen name="CommunityPostModifyScreen" component={CommunityPostModifyScreen}/>
            <Stack.Screen name="WritePostScreen" component={WritePostScreen}/>
            <Stack.Screen name="WriteGatiScreen" component={WriteGatiScreen}/>
            <Stack.Screen name="ProduceCommunityScreen" component={ProduceCommunityScreen}/>
        </Stack.Navigator>
    )
};


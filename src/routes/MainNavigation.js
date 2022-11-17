import ChatLiveScreen from "../screens/ChatLiveScreen";
import ChatListScreen from "../screens/ChatListScreen";
import TabNavigation from "./TabNavigation";
import PostDetailScreen from "../screens/PostDetailScreen";
import CommunityReportScreen from '../screens/CommunityReportScreen';
import CommunityPostWritingScreen from '../screens/CommunityPostWritingScreen';
import CommunityPostModifyScreen from '../screens/CommunityPostModifyScreen';


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
            <Stack.Screen name="PostDetailScreen" component={PostDetailScreen}/>
            <Stack.Screen name="CommunityReportScreen" component={CommunityReportScreen}/>
            <Stack.Screen name="CommunityPostWritingScreen" component={CommunityPostWritingScreen}/>
            <Stack.Screen name="CommunityPostModifyScreen" component={CommunityPostModifyScreen}/>
        </Stack.Navigator>
    )
};


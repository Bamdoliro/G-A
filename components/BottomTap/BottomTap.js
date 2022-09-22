import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatListSection from '../../pages/ChatScreen';
import Community from '../../pages/CommunityScreen';
import Profile from '../../pages/ProfileScreen';
import Home from '../../pages/HomeScreen';

function BottomTap() {
    const Tap = createBottomTabNavigator();
    return (
        <Tap.Navigator>
            <Tap.Screen name="Home" component={Home} />
            <Tap.Screen name="Community" component={Community} />
            <Tap.Screen name="Profile" component={Profile} />
            <Tap.Screen name="Chat" component={ChatListSection} />
        </Tap.Navigator>
    )
}

export default BottomTap;
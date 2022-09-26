import { View, StyleSheet } from "react-native";
import ChatScreenHeader from "../components/ChatSreenHeader/ChatScreenHeader";
import ChatListSection from "../components/ChatListSection/ChatListSection";
export default function ChatScreen({navigation}) {
    return (
        <View>
            <ChatScreenHeader />
            <ChatListSection navigation={navigation}/>
        </View>
    )
}

import { View, StyleSheet } from "react-native";
import ChatScreenHeader from "../components/ChatSreenHeader/ChatScreenHeader";
import ChatListSection from "../components/ChatListSection/ChatListSection";
export default function ChatScreen() {
    return (
        <View style={styles.ChatScreen}>
            <ChatScreenHeader />
            <ChatListSection />
        </View>
    )
}

const styles = StyleSheet.create({
    ChatScreen: {
        flex: 1,
    }
})
import { View, StyleSheet } from "react-native";
import ChatScreenHeader from "../components/ChatSreenHeader/ChatScreenHeader";

export default function ChatScreen() {
    return (
        <View style={styles.ChatScreen}>
            <ChatScreenHeader />
        </View>
    )
}

const styles = StyleSheet.create({
    ChatScreen: {
        flex: 1,
    }
})
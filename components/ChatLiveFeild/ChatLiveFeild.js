import { StyleSheet, ScrollView } from "react-native";
import ChatNotification from '../ChatNotification/ChatNotification';

export default function ChatLiveFelid() {
    return (
        <ScrollView style={styles.ChatLiveFeild}>
            <ChatNotification />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ChatLiveFeild: {
        backgroundColor: "#D4E0FF",
        flexDirection:"column"
    }
})
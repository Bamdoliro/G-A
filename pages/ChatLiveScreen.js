import { View, StyleSheet, Text } from "react-native";
import ChatLiveHeader from "../components/ChatLiveHeader/ChatLiveHeader";
import ChatLiveSendFeild from "../components/ChatLiveSendFeild/ChatLiveSendFeild";

export default function ChatLiveScreen() {
    return (
        <View style={styles.ChatLiveFeild} >
            <ChatLiveHeader />
            <View style={styles.ChatSendInputView}>
                <ChatLiveSendFeild style={styles.ChatLiveSendFeild} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ChatLiveFeild: {
        flex: 1,
        backgroundColor: "#D4E0FF",
    },
    ChatLiveSendFeild: {
        backgroundColor: "#fff",
        height: 10
    },
    ChatSendInputView: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: 10,
        width: "100%",
        height: "10%",
        backgroundColor: "#fff",     
    },
})
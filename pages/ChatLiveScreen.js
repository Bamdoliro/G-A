import { View, StyleSheet } from "react-native";
import ChatLiveHeader from "../components/ChatLiveHeader/ChatLiveHeader";
import ChatLiveSendFeild from "../components/ChatLiveSendFeild/ChatLiveSendFeild";

export default function ChatLiveScreen() {
    return (
        <View style={styles.ChatLiveFeild} >
            <ChatLiveHeader />
            <ChatLiveSendFeild />
        </View>
    )
}

const styles = StyleSheet.create({
    ChatLiveFeild: {
        backgroundColor: "#D4E0FF",
        height: "100%"
    }
})
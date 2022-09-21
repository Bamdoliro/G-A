import { View, StyleSheet } from "react-native";
import ChatLiveHeader from "../components/ChatLiveHeader/ChatLiveHeader";
import ChatLiveFeild from "../components/ChatLiveFeild/ChatLiveFeild";

export default function ChatLiveScreen() {
    return (
        <View style={styles.ChatLiveFeild} >
            <ChatLiveHeader />
        </View>
    )
}

const styles = StyleSheet.create({
    ChatLiveFeild: {
        backgroundColor: "#D4E0FF",
        height: "100%"
    }
})
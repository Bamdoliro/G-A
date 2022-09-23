import { View, StyleSheet } from "react-native";
import ChatLiveHeader from "../components/ChatLiveHeader/ChatLiveHeader";
import ChatLiveSendFeild from "../components/ChatLiveSendFeild/ChatLiveSendFeild";

export default function ChatLiveScreen() {
    return (
        <View style={styles.ChatLiveFeild} >
            <ChatLiveHeader style={{flex:1 , backgroundColor:"blue"}}/>
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
        flex: 1,
        backgroundColor: "#fff",
        height: 10
    },
    ChatSendInputView: {
        flex: 1,
        position: "fixed",
        bottom: 0,
        padding: 10,
        width: "100%",
        backgroundColor: "#fff",     
    },
})
import { View, StyleSheet, Platform, KeyboardAvoidingView, Text } from "react-native";
import ChatLiveFeild from "../components/ChatLiveFeild/ChatLiveFeild";
import ChatLiveHeader from "../components/ChatLiveHeader/ChatLiveHeader";
import ChatLiveSendFeild from "../components/ChatLiveSendFeild/ChatLiveSendFeild";

export default function ChatLiveScreen() {

    return (
        <View style={styles.ChatLiveSection} >
            <ChatLiveHeader style={{flex: 1}} />
            <ChatLiveFeild />
            <KeyboardAvoidingView
                style={styles.ChatKeyboardView}
                behavior={Platform.OS == 'ios' ? "padding" : "position"}
                enabled
            >
                <ChatLiveSendFeild style={styles.ChatLiveSendFeild} />
            </KeyboardAvoidingView>
            {
                Platform.OS == 'ios' ? (
                    <View style={styles.FooterEmpty}>
                        {/* IOS 아래 공백 */}
                    </View>
                ) : ""
            }
        </View>
    )
}

const styles = StyleSheet.create({
    ChatLiveSection: {
        flex: 1,
        backgroundColor: "#D4E0FF"
    },
    ChatKeyboardView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#fff",
    },
    FooterEmpty: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#fff",
        height: 20
    }
})
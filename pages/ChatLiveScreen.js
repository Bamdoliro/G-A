import { View, StyleSheet, Platform, KeyboardAvoidingView, Text } from "react-native";
import ChatLiveHeader from "../components/ChatLiveHeader/ChatLiveHeader";
import ChatLiveSendFeild from "../components/ChatLiveSendFeild/ChatLiveSendFeild";
import ChatLiveFelid from "../components/ChatLiveFeild/ChatLiveFeild";

export default function ChatLiveScreen() {

    return (
        <View style={styles.ChatLiveSection} >
            <ChatLiveHeader />
            <ChatLiveFelid />
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
    },
    ChatKeyboardView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 10,
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
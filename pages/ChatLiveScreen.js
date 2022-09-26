import {View, StyleSheet, Platform, KeyboardAvoidingView, Text} from "react-native";
import MyStatusBar from "../components/SafeAreaView/MyStatusBar";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import ChatLiveFeild from "../components/ChatLiveFeild/ChatLiveFeild";
import ChatLiveHeader from "../components/ChatLiveHeader/ChatLiveHeader";
import ChatLiveSendFeild from "../components/ChatLiveSendFeild/ChatLiveSendFeild";

export default function ChatLiveScreen({ route, navigation }) {
    const { id, name, numberOfMembers } = route.params;

    return (
        <>
            <MyStatusBar barStyle="dark-content" backgroundColor="white"/>
            <SafeAreaView style={styles.ChatLiveSection}>
                <ChatLiveHeader
                    style={{flex: 1}}
                    navigation={navigation}
                    name={name}
                    numberOfMembers={numberOfMembers}
                />
                <ChatLiveFeild flex={{flex: 1}}/>
                <KeyboardAvoidingView
                    style={styles.ChatKeyboardView}
                    behavior={Platform.OS == 'ios' ? "padding" : "position"}
                    enabled
                >
                    <ChatLiveSendFeild style={styles.ChatLiveSendFeild}/>
                </KeyboardAvoidingView>
                {
                    Platform.OS == 'ios' ? (
                        <View style={styles.FooterEmpty}>
                            {/* IOS 아래 공백 */}
                        </View>
                    ) : ""
                }
            </SafeAreaView>
        </>
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

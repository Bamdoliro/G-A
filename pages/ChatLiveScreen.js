import { KeyboardAvoidingView, Platform, StyleSheet, NativeModules, View } from "react-native";
import MyStatusBar from "../components/common/SafeAreaView/MyStatusBar";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import ChatLiveField from "../components/Chat/ChatLive/ChatLiveField";
import ChatLiveHeader from "../components/Chat/ChatLive/ChatLiveHeader";
import ChatLiveSendField from "../components/Chat/ChatLive/ChatLiveSendField";
import { useEffect, useState } from "react";
import MessageData from "../data/MessageData.json";

export default function ChatLiveScreen({ route, navigation, socket }) {
    const { id, name, numberOfMembers } = route.params;
    const [messages, setMessages] = useState([]);

    const sendMessage = (message) => {
        const data = {
            roomId: id,
            messageType: "USER",
            message: message,
        };

        socket.current.emit("message", data);
    };

    useEffect(() => {
        socket.current.on("message", data => {
            setMessages(oldDate => [...oldDate, data])
        });

        socket.current.on("error", err => {
            console.log(err)
        })
    }, []);

    // 키보드

    const { StatusBarManager } = NativeModules;

    useEffect(() => {
        Platform.OS == 'ios' ? StatusBarManager.getHeight((statusBarFrameData) => {
            setStatusBarHeight(statusBarFrameData.height)
        }) : null
    }, []);

    const [statusBarHeight, setStatusBarHeight] = useState(0);

    return (
        <>
            <MyStatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView style={styles.ChatLiveSection}>
                <KeyboardAvoidingView
                    style={styles.ChatKeyboardView}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={statusBarHeight+20}
                >
                    <ChatLiveHeader
                        style={{ flex: 1 }}
                        navigation={navigation}
                        name={name}
                        numberOfMembers={numberOfMembers}
                    />
                    <ChatLiveField
                        flex={{ flex: 1 }}
                        messageData={MessageData}
                    />
                    <ChatLiveSendField
                        sendMessage={sendMessage}
                    />
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    ChatLiveSection: {
        flex: 1,
        backgroundColor: "#fff"
    },
    ChatKeyboardView: {
        flex: 1,
        backgroundColor: "#fff"
    },
})
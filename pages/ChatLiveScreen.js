import {KeyboardAvoidingView, Platform, StyleSheet, View} from "react-native";
import MyStatusBar from "../components/common/SafeAreaView/MyStatusBar";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import ChatLiveField from "../components/Chat/ChatLive/ChatLiveField";
import ChatLiveHeader from "../components/Chat/ChatLive/ChatLiveHeader";
import ChatLiveSendField from "../components/Chat/ChatLive/ChatLiveSendField";
import {useEffect, useState} from "react";
import MessageData from "../data/MessageData.json";

export default function ChatLiveScreen({route, navigation, socket}) {
    const {id, name, numberOfMembers} = route.params;
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

                <ChatLiveField
                    flex={{flex: 1}}
                    messageData={MessageData}
                />
                <KeyboardAvoidingView
                    style={styles.ChatKeyboardView}
                    behavior={Platform.OS === 'ios' ? "padding" : "position"}
                    enabled
                >
                    <ChatLiveSendField
                        sendMessage={sendMessage}
                    />
                </KeyboardAvoidingView>

                {
                    Platform.OS === 'ios' ? (
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

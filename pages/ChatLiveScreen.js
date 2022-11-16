import {
    Keyboard,
    KeyboardAvoidingView,
    NativeModules,
    Platform,
    StyleSheet,
    TouchableWithoutFeedback
} from "react-native";
import MyStatusBar from "../components/common/SafeAreaView/MyStatusBar";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import ChatLiveField from "../components/Chat/ChatLive/ChatLiveField";
import ChatLiveHeader from "../components/Chat/ChatLive/ChatLiveHeader";
import ChatLiveSendField from "../components/Chat/ChatLive/ChatLiveSendField";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {aiUrl, baseUrl} from "../utils/api/urls";
import jwtDecode from "jwt-decode";
import Toast from "react-native-toast-message";
import {toastConfig} from "../components/common/Toast/ToastConfig";
import {getMessages} from "../utils/api/chat";

export default function ChatLiveScreen({ route, navigation, socket }) {
    const { id, name, numberOfMembers } = route.params;
    const [messages, setMessages] = useState([]);
    const [currentUserId, setCurrentUserId] = useState(0);

    const sendMessage = (message) => {
        if (message.length > 0) {
            const data = {
                roomId: id,
                messageType: "USER",
                message: message,
            };

            socket.current.emit("message", data);
            showChatNotification(message);
        }
    };

    const showChatNotification = async (message) => {
        const r = await axios.get(aiUrl, {
            params: {
                msg: message
            }
        });

        if (r.data !== "0") {
            let result = r.data.split(',')
            Toast.show({
                type: 'chatNotification',
                text1: result[0],
                text2: result[1]
            })
        }
    }


    useEffect(() => {
        socket.current.on("message", data => {
            setMessages(oldDate => [...oldDate, data])
        });

        socket.current.on("error", err => {
            console.log(err)
        })
    }, [socket]);

    // 키보드

    const { StatusBarManager } = NativeModules;

    useEffect(() => {
        Platform.OS == 'ios' ? StatusBarManager.getHeight((statusBarFrameData) => {
            setStatusBarHeight(statusBarFrameData.height)
        }) : null
    }, []);

    const [statusBarHeight, setStatusBarHeight] = useState(0);

    useEffect(() => {
        navigation.addListener('focus', getMessagesHistory);
        navigation.addListener('focus', setCurrentUser);
    }, [navigation]);

    const setCurrentUser = async () => {
        const token = await AsyncStorage.getItem("access-token");
        setCurrentUserId(jwtDecode(token).userId)
    }

    const getMessagesHistory = async () => {
        const data = await getMessages(id);
        setMessages(data.reverse())
    };

    return (
        <>
            <MyStatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView style={styles.ChatLiveSection}>
                <KeyboardAvoidingView
                    style={styles.ChatKeyboardView}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === "ios" ? statusBarHeight : statusBarHeight+20}
                >
                    <ChatLiveHeader
                        style={{ flex: 1 }}
                        navigation={navigation}
                        name={name}
                        numberOfMembers={numberOfMembers}
                    />
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ChatLiveField
                            style={{ flex: 1 }}
                            messageData={messages}
                            currentUserId={currentUserId}
                        />
                    </TouchableWithoutFeedback>
                    <ChatLiveSendField
                        sendMessage={sendMessage}
                    />
                </KeyboardAvoidingView>
            </SafeAreaView>
            <Toast config={toastConfig} />
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

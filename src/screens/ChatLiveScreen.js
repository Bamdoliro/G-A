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
import SendField from "../components/common/input/SendField/SendField";
import {useEffect, useState} from "react";
import Toast from "react-native-toast-message";
import {toastConfig} from "../components/common/Toast/ToastConfig";
import {getAIMessage, getMessages} from "../utils/api/chat";
import sendImg from "../assets/sendBtn.png"
import {useQuery} from "react-query";
import {getUser} from "../utils/storage/user";

export default function ChatLiveScreen({route, navigation, socket}) {
    const {id, name, numberOfMembers} = route.params;
    const [messages, setMessages] = useState([]);
    const [currentUserId, setCurrentUserId] = useState(0);
    const {} = useQuery('getMessages', () => getMessages(id), {
        onSuccess: (data) => {
            setMessages(data?.messageList.reverse());
        }
    });

    const sendMessage = async (message) => {
        if (message.length > 0) {
            const data = {
                roomId: id,
                messageType: "USER",
                message: message,
            };

            socket.current?.emit("message", data);
            await showChatNotification(message);
        }
    };

    const showChatNotification = async (message) => {
        const r = await getAIMessage(message);

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
        socket.current?.on("message", data => {
            if (data.roomId == id) {
                setMessages(oldDate => [...oldDate, data])
            }
        });

        socket.current?.on("error", err => {
            console.log(err)
        })
    }, [socket]);

    // 키보드

    const {StatusBarManager} = NativeModules;

    useEffect(() => {
        Platform.OS == 'ios' ? StatusBarManager.getHeight((statusBarFrameData) => {
            setStatusBarHeight(statusBarFrameData.height)
        }) : null
    }, []);

    const [statusBarHeight, setStatusBarHeight] = useState(0);

    useEffect(() => {
        navigation.addListener('focus', setCurrentUser);
    }, [navigation]);

    const setCurrentUser = async () => {
        const id = await getUser();
        setCurrentUserId(parseInt(id));
    }

    return (
        <>
            <MyStatusBar barStyle="dark-content" backgroundColor="white"/>
            <SafeAreaView style={styles.ChatLiveSection}>
                <KeyboardAvoidingView
                    style={styles.ChatKeyboardView}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === "ios" ? statusBarHeight : statusBarHeight + 20}
                >
                    <ChatLiveHeader
                        style={{flex: 1}}
                        navigation={navigation}
                        name={name}
                        numberOfMembers={numberOfMembers}
                    />
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ChatLiveField
                            style={{flex: 1}}
                            messageData={messages}
                            currentUserId={currentUserId}
                        />
                    </TouchableWithoutFeedback>
                    <SendField
                        sendMessage={sendMessage}
                        sendImg={sendImg}
                    />
                </KeyboardAvoidingView>
            </SafeAreaView>
            <Toast config={toastConfig}/>
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

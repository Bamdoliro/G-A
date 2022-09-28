import {KeyboardAvoidingView, Platform, StyleSheet, View} from "react-native";
import MyStatusBar from "../components/common/SafeAreaView/MyStatusBar";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import ChatLiveField from "../components/Chat/ChatLive/ChatLiveField";
import ChatLiveHeader from "../components/Chat/ChatLive/ChatLiveHeader";
import ChatLiveSendField from "../components/Chat/ChatLive/ChatLiveSendField";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {aiUrl, baseUrl} from "../api/urls";
import jwtDecode from "jwt-decode";
import Toast from "react-native-toast-message";
import {toastConfig} from "../components/common/Toast/ToastConfig";

export default function ChatLiveScreen({route, navigation, socket}) {
    const {id, name, numberOfMembers} = route.params;
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
        // const r = await axios.get(aiUrl, {
        //     params: {
        //         msg: message
        //     }
        // });

        const r = {
            data: '경고,나보다걔가좋니? ㅋㅋ'
        }

        if (r.data !== null) {
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
    }, []);


    useEffect(() => {
        navigation.addListener('focus', getMessages);
        navigation.addListener('focus', setCurrentUser);
    }, [navigation]);

    const setCurrentUser = async () => {
        const token = await AsyncStorage.getItem("access-token");
        setCurrentUserId(jwtDecode(token).userId)
    }

    const getMessages = async () => {
        const accessToken = await AsyncStorage.getItem("access-token");
        try {
            const response = await axios.get(`${baseUrl}/chat/${id}?sort=id,desc`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            setMessages([...response.data.reverse()]);
        } catch (e) {
            console.log(e);
        }
    };

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
                    messageData={messages}
                    currentUserId={currentUserId}
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
            <Toast config={toastConfig} />
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

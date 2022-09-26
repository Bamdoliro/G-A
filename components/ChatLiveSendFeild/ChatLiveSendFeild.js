import { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Image, TouchableOpacity,Platform, KeyboardAvoidingView, NativeModules } from "react-native";
import SendBtn from "../../assets/sendBtn.png";


export default function ChatLiveSendFeild() {
    const [sendText, setSendText] = useState("");

    const SendBtnOnClick = () => {
        console.log("버튼누름");
    }

    useEffect(() => {
        // setText 바뀔때 밀림 방지
    }, [sendText])

    return (
        <View style={styles.ChatSendInputView}>
            <TextInput
                style={styles.ChatSendInput}
                onChange={e => setSendText(e.target.value)}
                autoFocus={true}
            />
            <TouchableOpacity onPress={SendBtnOnClick}>
                <Image
                    source={SendBtn}
                    style={styles.ChatSendBtn}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    ChatSendInputView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: "100%",
        paddingTop: 13,
        paddingBottom: 13
    },
    ChatSendInput: {
        backgroundColor: "#fff",
        width: "75%",
        fontSize: 15,
        borderRadius: 15,
        marginRight: 25,
        padding: 5,
        backgroundColor: "#E7E7E7",
        outLineStyle: "none",
        outlineStyle: "none",
        paddingLeft: 15
    },
    ChatSendBtn: {
        height: 30,
        width: 30
    }

})

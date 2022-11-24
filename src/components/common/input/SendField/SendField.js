import {useEffect, useState} from "react";
import {Image, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import SendBtn from "../../../../assets/sendBtn.png";


export default function SendField({sendMessage}) {
    const [message, setMessage] = useState("");

    const SendBtnOnClick = () => {
        sendMessage(message);
        setMessage("");
    }

    useEffect(() => {
        // setText 바뀔때 밀림 방지
    }, [message])

    return (
        <View style={styles.ChatSendInputView}>
            <TextInput
                style={styles.ChatSendInput}
                value={message}
                onChangeText={message => setMessage(message)}
                autoFocus={false}
                autoCorrect={false}
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
        width: "100%",
        paddingTop: 13,
        paddingBottom: 13,
        marginTop: "auto",
        backgroundColor: "#fff",
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1,
    },
    ChatSendInput: {
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

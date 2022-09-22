import { View, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import SendBtn from "../../assets/SendBtn.png";

export default function ChatLiveSendFeild() {
    return (
        <View style={styles.ChatSendInputView}>
            <TextInput 
                style={styles.ChatSendInput}
            />
            <TouchableOpacity>
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
    },
    ChatSendInput: {
        backgroundColor: "#fff",
        width: "80%",
        fontSize: 15,
        borderRadius: 15,
        marginRight: 20,
        padding: 5,
        backgroundColor: "#E7E7E7",
        outLineStyle: "none",
        outlineStyle: "none",
        paddingLeft: 15
    } ,
    ChatSendBtn: {
        height: "30px",
        width: "30px"
    }

})
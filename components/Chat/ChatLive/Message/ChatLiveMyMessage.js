import { View, Text, StyleSheet } from "react-native"

export default function ChatLiveMyMessage({data}) {
    return (
        <View style={styles.MyMessage}>
            <Text style={styles.MessageText}>{data.message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    MyMessage: {
        flexDirection: "row",
        flex: 1,
        alignSelf: "flex-end",
        alignItems: "center",
        backgroundColor: "#0D76FF",
        padding: 9,
        borderRadius: 20,
        maxWidth: 170,
        marginBottom: 10
    },
    MessageText: {
        color: "#fff",
        fontSize: 15,
        textAlign: "left"
    }
})

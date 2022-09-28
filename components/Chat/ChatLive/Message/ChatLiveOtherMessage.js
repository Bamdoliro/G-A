import { View, StyleSheet, Text } from "react-native";

export default function ChatLiveOtherMessage({data}) {
    return (
        <View style={styles.OtherMessage}>
            <Text style={styles.MessageText}>{data.message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    OtherMessage: {
        flexDirection: "row",
        flex: 1,
        alignSelf: "flex-start",
        backgroundColor: "#fff",
        padding: 9,
        borderRadius: 20,
        maxWidth: 170,
        marginBottom: 10
    },
    MessageText: {
        color: "#000",
        fontSize: 15,
        textAlign: "left"
    }
})

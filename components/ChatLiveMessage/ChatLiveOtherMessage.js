import { View, StyleSheet, Text } from "react-native";

export default function ChatLiveOtherMessage() {
    return (
        <View style={styles.OtherMessage}>
            <Text style={styles.MessageText}>선포해라 작전명 청춘</Text>
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
    },
    MessageText: {
        color: "#000",
        fontSize: 15,
        textAlign: "center"
    }
})
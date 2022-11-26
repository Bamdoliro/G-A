import {View, Text, StyleSheet, Image} from "react-native"

export default function ChatLiveMyMessage({data}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.block}>
                    <Text style={styles.time}>{data.sentAt.substring(11)}</Text>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{data.message}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        alignSelf: "flex-end",
        marginVertical: 7,
    },
    content: {
        alignItems: "flex-end",
    },
    block: {
        flexDirection: "row",
        alignItems: "flex-end",
    },
    time: {
        fontSize: 12,
        color: "#737373",
        marginRight: 5,
    },
    textContainer: {
        alignItems: "center",
        backgroundColor: "#0D76FF",
        padding: 11,
        borderRadius: 20,
        maxWidth: "80%",
    },
    text: {
        color: "#fff",
        fontSize: 15,
    },
})

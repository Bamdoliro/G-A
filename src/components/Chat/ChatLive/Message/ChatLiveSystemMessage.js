import {StyleSheet, Text, View} from "react-native";

export default function SystemMessage({data}) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{data.message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        opacity: 0.3,
        width: "70%",
        paddingVertical: 2,
        borderRadius: 10,
        marginTop: 7
    },
    text: {
        // color: "#737373",
        color: "black",
        fontSize: 13,
        textAlign: "center"
    }
})

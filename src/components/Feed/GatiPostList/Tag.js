import {StyleSheet, Text, View} from "react-native";

export default function Tag({text}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#BFD5F3",
        paddingHorizontal: 12,
        paddingVertical: 3,
        borderRadius: 4,
        marginRight: 8,
    },
    text: {
        color: "#0D76FF",
        fontSize: 10,
        fontWeight: "bold",
    }
})

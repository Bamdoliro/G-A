import {StyleSheet, Text, View} from "react-native";

export default function InputFrame({title, child}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {child}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: "100%",
    },
    title: {
        fontSize: 18,
        color: "#999999",
        fontWeight: "bold",
        marginBottom: 5,
    },
})

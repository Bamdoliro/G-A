import {StyleSheet, Text, View} from "react-native";

export default function InputFrame({title, child, style}) {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, style]}>{title}</Text>
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

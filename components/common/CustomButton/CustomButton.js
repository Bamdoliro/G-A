import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CustomButton({ title, onPress }) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#0D76FF",
        height: "100%",
        borderRadius: 20,
        borderColor: "#0D76FF",
        borderWidth: 1,
        paddingHorizontal: 10,
        justifyContent: "center",
        marginBottom: 10,
    },
    button: {
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 17,
        fontWeight: "600",
    }

});

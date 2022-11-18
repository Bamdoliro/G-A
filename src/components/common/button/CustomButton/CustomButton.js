import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CustomButton({ title, onPress, style }) {
    return (
        <View style={[styles.container, style]}>
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
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "transparent",
        paddingVertical: 5,
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

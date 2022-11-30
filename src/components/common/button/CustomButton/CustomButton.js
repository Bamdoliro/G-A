import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CustomButton({ text, onPress, style, textStyle }) {
    return (
        <View style={[styles.container, style]}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={[styles.text, styles.textStyle]}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#0D76FF",
        borderRadius: 20,
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
        fontSize: 17,
        color: "#fff",
        fontWeight: "600",
    }
});

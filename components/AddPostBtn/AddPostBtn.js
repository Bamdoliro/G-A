import { View, StyleSheet } from "react-native";
import { FloatingAction } from "react-native-floating-action";

export default function AddPostBtn() {
    return (
        <View style={styles.AddPostBtn}>
        </View>
    )
}

const styles = StyleSheet.create({
    AddPostBtn: {
        borderRadius: 14,
        width: 60,
        height: 60,
        backgroundColor: "#0D76FF",
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
        bottom: 30,
    }
})
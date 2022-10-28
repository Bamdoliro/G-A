import { View, StyleSheet, Image } from "react-native";
import PlusIcon from "../../assets/plus.png"

export default function AddPostBtn() {
    return (
        <View style={styles.AddPostBtn}>
            <Image
                source={PlusIcon}
                style={styles.PlusIcon}
            />
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
    },
    PlusIcon: {
        width: 35,
        height: 35
    }
})
import {Image, StyleSheet, TouchableOpacity} from "react-native";
import PlusIcon from "../../../assets/plus.png"

export default function PlusButton({onPress} ) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Image
                source={PlusIcon}
                style={styles.PlusIcon}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
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

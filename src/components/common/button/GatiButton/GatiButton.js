import {Image, StyleSheet, TouchableOpacity} from "react-native";
import WhiteGati from "../../../../assets/WhiteGati.png";

export default function GatiButton({onPress} ) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Image
                source={WhiteGati}
                style={styles.Icon}
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
    Icon: {
        width: 35,
        height: 35
    }
})

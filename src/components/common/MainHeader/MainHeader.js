import {StyleSheet, View} from "react-native";
import Bell from "../Bell/Bell";

export default function MainHeader({child, style}) {
    return (
        <View style={[styles.container, style]}>
            {child}
            <Bell
                style={styles.bell}
            />
        </View>
    )
        ;
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        height: 125,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 30,
        paddingVertical: 20,
        marginBottom: 10,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,

        // shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 1,
    },
    bell: {
        position: "absolute",
        right: 20,
        top: 35,
    },
})

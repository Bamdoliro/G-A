import { View, Text, StyleSheet, Image } from "react-native";
import BellIcon from "../../../assets/Bell_Icon.png"
import ToggleIcon from "../../../assets/main_toggle.png"

export default function MainSubHeader() {
    return (
        <View style={styles.MainSubHeader}>
            <View style={styles.MainHomeBtn}>
                <Image
                    source={ToggleIcon}
                    style={{width: 25, height: 25}}
                />
                <Text style={styles.MainSubHeaderTitle}>
                    홈
                </Text>
            </View>
            <Image
                source={BellIcon}
                style={{width: 25, height: 25}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    MainSubHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
    },
    MainSubHeaderTitle: {
        fontSize: 26,
        fontWeight: "bold",
        paddingLeft: 10
    },
    MainHomeBtn: {
        flexDirection: "row"
    }
})

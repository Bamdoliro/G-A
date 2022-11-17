import { View, Text, StyleSheet, Image } from "react-native";
import BellIcon from "../../../../assets/Bell_Icon.png"

export default function ChatSubHeader() {
    return (
        <View style={styles.ChatSubHeader}>
            <Text style={styles.SubHeaderTitle}>
                채팅
            </Text>
            <Image
                source={BellIcon}
                style={styles.BellIcon}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ChatSubHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
    },
    SubHeaderTitle: {
        fontSize: 26,
        fontWeight: "bold"
    },
    BellIcon: {
        width: 26,
        height: 26
    }
})

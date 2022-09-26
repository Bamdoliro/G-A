import { View, StyleSheet } from "react-native";
import ChatRoomSearch from "./ChatRoomSearch"

export default function ChatScreenHeader() {
    return (
        <View style={styles.HeaderFrame}>
            <ChatRoomSearch />
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderFrame: {
        flexDirection: "row",
        justifyContent: "center",
        height: 125,
        width: "100%",
        borderWidth: 1,
        borderColor: 1,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
    }
})
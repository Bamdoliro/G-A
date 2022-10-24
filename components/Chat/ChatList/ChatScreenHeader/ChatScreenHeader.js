import { View, StyleSheet } from "react-native";
import ChatRoomSearch from "./ChatRoomSearch"
import ChatSubHeader from "./ChatSubHeader";

export default function ChatScreenHeader() {
    return (
        <View style={styles.HeaderFrame}>
            <ChatSubHeader />
            <ChatRoomSearch />
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderFrame: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: "#F2F2F2",
        height: 125,
        width: "100%",
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,

    }
})

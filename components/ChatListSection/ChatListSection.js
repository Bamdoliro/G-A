import { ScrollView, StyleSheet } from "react-native";
import ChatList from "../ChatList/ChatList";
import ChatListData from "../../data/ChatList.json"

export default function ChatListSection() {
    return (
        <ScrollView style={styles.ScrollSection}>
            <ChatList
                IMG = {ChatListData.row.IMG}
                MAIN_TEXT = {ChatListData.row.MAIN_TEXT}
                SUB_TEXT = {ChatListData.row.SUB_TEXT}
                PARTICIPANT = {ChatListData.row.PARTICIPANT}
                DATE = {ChatListData.row.DATE}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ScrollSection: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
    }
})
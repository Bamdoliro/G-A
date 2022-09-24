import { ScrollView, StyleSheet } from "react-native";
import ChatList from "../ChatList/ChatList";
import ChatListData from "../../data/ChatList.json"

export default function ChatListSection() {
    async function getChatListData() {
        try {
            const response = await axios.get('http://3.39.41.34/v2/api-docs/chat/', {
                params: {
                    // 파라마터 값
                }
            });
            console.log(response);
        } catch (error) {
            // 응답 실패
            console.log(error)
        }
    }


    return (
        <ScrollView style={styles.ScrollSection}>
            <ChatList
                IMG = {ChatListData.row.IMG}
                MAIN_TEXT = {ChatListData.row.MAIN_TEXT}
                SUB_TEXT = {ChatListData.row.SUB_TEXT}
                PARTICIPANT = {ChatListData.row.PARTICIPANT}
                DATE = {ChatListData.row.DATE}
            />
            <ChatList
                IMG = {ChatListData.row.IMG}
                MAIN_TEXT = {ChatListData.row.MAIN_TEXT}
                SUB_TEXT = {ChatListData.row.SUB_TEXT}
                PARTICIPANT = {ChatListData.row.PARTICIPANT}
                DATE = {ChatListData.row.DATE}
            />
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
        padding: 20,
    }
})
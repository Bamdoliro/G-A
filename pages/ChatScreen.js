import { View } from "react-native";
import ChatList from "../components/ChatList/ChatList";
import ChatListData from "../data/ChatList.json";

export default function ChatScreen() {
    return (
        <View>
            <ChatList
                IMG = {ChatListData.row.IMG}
                MAIN_TEXT = {ChatListData.row.MAIN_TEXT}
                SUB_TEXT = {ChatListData.row.SUB_TEXT}
                PARTICIPANT = {ChatListData.row.PARTICIPANT}
                DATE = {ChatListData.row.DATE}
            />
        </View>
    )
}

import {ScrollView, StyleSheet} from "react-native";
import ChatList from "./ChatList";
import ChatListData from "../../../data/ChatList.json"

export default function ChatListSection({navigation, rooms}) {

    return (
        <ScrollView style={styles.ScrollSection}>
            {rooms.map(r => (
                <ChatList
                    IMG={ChatListData.row.IMG}
                    name={r.name}
                    SUB_TEXT={"내용내용"}
                    numberOfMembers={r.numberOfMembers}
                    DATE={ChatListData.row.DATE}
                    id={r.id}
                    navigation={navigation}
                />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ScrollSection: {
        width: "100%",
        flexDirection: "column",
        padding: 20,
    }
})

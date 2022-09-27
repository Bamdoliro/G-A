import { StyleSheet, ScrollView } from "react-native";
import ChatLiveMyMessage from "../ChatLiveMessage/ChatLiveMyMessage";
import ChatLiveOtherMessage from "../ChatLiveMessage/ChatLiveOtherMessage";
import MessageData from "../../data/MessageData.json"

export default function ChatLiveFelid() {
    return (
        <ScrollView style={styles.ChatLiveFeild}>
            <ChatLiveMyMessage  />
            <ChatLiveOtherMessage />            
            <ChatLiveMyMessage  />
            <ChatLiveOtherMessage />
            <ChatLiveMyMessage  />
            <ChatLiveOtherMessage />     
            <ChatLiveMyMessage  />
            <ChatLiveOtherMessage />     
            <ChatLiveMyMessage  />
            <ChatLiveOtherMessage />     
            <ChatLiveMyMessage  />
            <ChatLiveOtherMessage />     
            <ChatLiveMyMessage  />
            <ChatLiveOtherMessage />          
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ChatLiveFeild: {
        flex: 1,
        backgroundColor: "#D4E0FF",
        flexDirection:"column",
        padding: 8,
        paddingTop: 24,
        flexGrow: 1
    },
})
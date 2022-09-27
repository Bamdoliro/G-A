import { StyleSheet, Text, FlatList, View } from "react-native";
import ChatLiveMyMessage from "../ChatLiveMessage/ChatLiveMyMessage";
import ChatLiveOtherMessage from "../ChatLiveMessage/ChatLiveOtherMessage";
import MessageData from "../../data/MessageData.json"
import { useEffect, useState } from "react";

export default function ChatLiveFelid() {
    const [msgData, setMsgData] = useState([]);
    let curreentUserId = 1;

    useEffect(() => {
        setMsgData(MessageData)
    }, [])

    return (
        <View style={styles.ChatLiveFeild}>
            <FlatList 
                style={styles.list}
                data={msgData}
                keyExtractor={item => item.userId}
                renderItem={({item}) =>
                    item.userId == curreentUserId ? (
                        <ChatLiveMyMessage />
                    ) : (
                        <ChatLiveOtherMessage />
                    )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ChatLiveFeild: {
        backgroundColor: "#D4E0FF",
        padding: 8,
        paddingTop: 24,
        flexGrow: 1
    },
    list: {

    }
})
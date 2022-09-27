import { StyleSheet, Text, FlatList, View } from "react-native";
import ChatLiveMyMessage from "../ChatLiveMessage/ChatLiveMyMessage";
import ChatLiveOtherMessage from "../ChatLiveMessage/ChatLiveOtherMessage";
import MessageData from "../../data/MessageData.json"
import { useEffect, useState } from "react";

export default function ChatLiveFelid({messageData}) {
    let currentUserId = 1;

    return (
        <View style={styles.ChatLiveFeild}>
            <FlatList
                style={styles.list}
                data={messageData}
                keyExtractor={item => item.userId}
                renderItem={({item}) =>
                    item.userId === currentUserId ? (
                        <ChatLiveMyMessage data={item}/>
                    ) : (
                        <ChatLiveOtherMessage data={item} />
                    )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ChatLiveFeild: {
        backgroundColor: "#D4E0FF",
        padding: 10,
        paddingTop: 24,
        paddingBottom: 20,
        flexGrow: 1
    },
    list: {

    }
})

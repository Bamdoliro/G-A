import { FlatList, StyleSheet, View } from "react-native";
import React, { useRef } from 'react';

import ChatLiveMyMessage from "./Message/ChatLiveMyMessage";
import ChatLiveOtherMessage from "./Message/ChatLiveOtherMessage";

export default function ChatLiveField({ messageData, currentUserId }) {
    const flatList = React.useRef(null)

    return (
        <View style={styles.ChatLiveField}>
            <FlatList
                ref = {flatList}
                onContentSizeChange={() => {
                    flatList.current.scrollToEnd();
                }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ }}
                style={styles.list}
                data={messageData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    item.userId === currentUserId ? (
                        <ChatLiveMyMessage data={item} />
                    ) : (
                        <ChatLiveOtherMessage data={item} />
                    )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ChatLiveField: {
        flex: 1,
        backgroundColor: "#D4E0FF",
        flexGrow: 1,
        paddingLeft: 12,
        paddingRight: 12,
    },
    list: {}
})

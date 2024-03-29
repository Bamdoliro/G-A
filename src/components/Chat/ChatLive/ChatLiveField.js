import {FlatList, StyleSheet, View} from "react-native";
import React from 'react';

import ChatLiveMyMessage from "./Message/ChatLiveMyMessage";
import ChatLiveOtherMessage from "./Message/ChatLiveOtherMessage";
import SystemMessage from "./Message/ChatLiveSystemMessage";

export default function ChatLiveField({messageData, currentUserId}) {
    const flatList = React.useRef(null)

    return (
        <View style={styles.ChatLiveField}>
            <FlatList
                ref={flatList}
                onContentSizeChange={() => {
                    flatList.current.scrollToEnd();
                }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{}}
                style={styles.list}
                data={messageData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    if (item.messageType === "SYSTEM") {
                        return <SystemMessage data={item}/>
                    } else if (item.userProfile.id === currentUserId) {
                        return <ChatLiveMyMessage data={item}/>
                    } else {
                        return <ChatLiveOtherMessage data={item}/>
                    }
                }}
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

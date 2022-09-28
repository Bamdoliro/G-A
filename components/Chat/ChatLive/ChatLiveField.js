import { FlatList, StyleSheet, ScrollView } from "react-native";
import { useRef } from "react";
import ChatLiveMyMessage from "./Message/ChatLiveMyMessage";
import ChatLiveOtherMessage from "./Message/ChatLiveOtherMessage";

export default function ChatLiveField({ messageData }) {
    const scrollViewRef = useRef();
    let currentUserId = 1;

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={styles.ChatLiveField}
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        >
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 30, paddingTop: 30, justifyContent: 'flex-end' }}
                style={styles.list}
                data={messageData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) =>
                    item.userId === currentUserId ? (
                        <ChatLiveMyMessage data={item} />
                    ) : (
                        <ChatLiveOtherMessage data={item}/>
                    )
                }
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ChatLiveField: {
        backgroundColor: "#D4E0FF",
        flexGrow: 1,
        paddingLeft: 12,
        paddingRight: 12,
    },
    list: {}
})

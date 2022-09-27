import {FlatList, StyleSheet, View} from "react-native";
import ChatLiveMyMessage from "./Message/ChatLiveMyMessage";
import ChatLiveOtherMessage from "./Message/ChatLiveOtherMessage";

export default function ChatLiveFelid({messageData}) {
    let currentUserId = 1;

    return (
        <View style={styles.ChatLiveField}>
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
    ChatLiveField: {
        backgroundColor: "#D4E0FF",
        padding: 10,
        paddingTop: 24,
        paddingBottom: 20,
        flexGrow: 1
    },
    list: {

    }
})

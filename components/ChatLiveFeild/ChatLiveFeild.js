import { StyleSheet, ScrollView } from "react-native";
import { View } from "react-native-web";
import ChatNotification from '../ChatNotification/ChatNotification';

export default function ChatLiveFelid() {
    return (
        <ScrollView style={{height:100}}>
            <View style={styles.ChatLiveFeild}>
                <ChatNotification />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ChatLiveFeild: {
        flexDirection: 'column',
        backgroundColor: "#D4E0FF",
        position: 'relative',
        alignItems: 'center',
        paddingTop: 12
    }
})
import {View, StyleSheet, StatusBar} from "react-native";
import ChatScreenHeader from "../components/ChatSreenHeader/ChatScreenHeader";
import ChatListSection from "../components/ChatListSection/ChatListSection";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import MyStatusBar from "../components/SafeAreaView/MyStatusBar";

export default function ChatScreen({navigation}) {
    return (
        <>
            <MyStatusBar barStyle="dark-content" backgroundColor="white"/>
            <SafeAreaView style={styles.ChatScreenBackground}>
                <ChatScreenHeader/>
                <ChatListSection navigation={navigation}/>
            </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    ChatScreenBackground: {
        flex: 1,
        backgroundColor: "#f4f4f4",
        width: "100%",
    },
})

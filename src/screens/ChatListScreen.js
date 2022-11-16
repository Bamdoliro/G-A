import {StyleSheet} from "react-native";
import ChatScreenHeader from "../components/Chat/ChatList/ChatScreenHeader/ChatScreenHeader";
import ChatListSection from "../components/Chat/ChatList/ChatListSection";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import MyStatusBar from "../components/common/SafeAreaView/MyStatusBar";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {baseUrl} from "../utils/api/urls";
import {useQuery} from "react-query";
import {getRooms} from "../utils/api/chat";

export default function ChatListScreen({navigation}) {
    const {data} = useQuery('getRooms', getRooms)

    useEffect(() => {
        // navigation.addListener('focus', getRooms);
    }, [navigation]);

    return (
        <>
            <MyStatusBar barStyle="dark-content" backgroundColor="white"/>
            <SafeAreaView style={styles.ChatScreenBackground}>
                <ChatScreenHeader/>
                <ChatListSection
                    navigation={navigation}
                    rooms={data}
                />
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

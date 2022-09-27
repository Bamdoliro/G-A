import {StyleSheet} from "react-native";
import ChatScreenHeader from "../components/ChatSreenHeader/ChatScreenHeader";
import ChatListSection from "../components/ChatListSection/ChatListSection";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import MyStatusBar from "../components/SafeAreaView/MyStatusBar";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {baseUrl} from "../api/urls";

export default function ChatScreen({navigation}) {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        navigation.addListener('focus', getRooms);
    }, [navigation]);

    const getRooms = async () => {
        const accessToken = await AsyncStorage.getItem("access-token");
        try {
            const response = await axios.get(`${baseUrl}/chat`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            setRooms([...response.data]);
            console.log(rooms)
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <MyStatusBar barStyle="dark-content" backgroundColor="white"/>
            <SafeAreaView style={styles.ChatScreenBackground}>
                <ChatScreenHeader/>
                <ChatListSection
                    navigation={navigation}
                    rooms={rooms}
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

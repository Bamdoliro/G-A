import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {baseUrl} from "../../utils/api/urls";
import {useState} from 'react';
import Toggle from "../common/input/Toggle/Toggle";
import {deleteAccessToken, deleteRefreshToken} from "../../utils/storage/token";

export default function ProfileSection({setLogout}) {
    const [isNoticeAllow, setIsNoticeAllow] = useState(false);

    const logoutUser = async () => {
        try {
            const accessToken = await AsyncStorage.getItem("access-token");
            const response = await axios.delete(`${baseUrl}/auth`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            await deleteAccessToken();
            await deleteRefreshToken();
            setLogout();
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <View style={styles.Settings}>
                <View style={styles.NoticeAllow}>
                    <Text style={styles.NoticeAllowText}>앱 내 알림 허용</Text>
                    <Toggle
                        value={isNoticeAllow}
                        setValue={setIsNoticeAllow}
                    />
                </View>
                <TouchableOpacity style={styles.Logout} onPress={logoutUser}>
                    <Text>로그아웃</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('계정 탈퇴')}>
                    <Text>계정 탈퇴</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    Settings: {
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 42
    },
    NoticeAllow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    NoticeAllowText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    Logout: {
        marginBottom: 10
    }
})


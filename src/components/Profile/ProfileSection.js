import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import Toggle from "../common/input/Toggle/Toggle";
import {deleteAccessToken, deleteRefreshToken, getAccessToken} from "../../utils/storage/token";
import {logout} from "../../utils/api/auth";
import {useMutation} from "react-query";
import {deleteCurrentCommunity} from "../../utils/storage/currentCommunity";
import {deleteUser} from "../../utils/storage/user";

export default function ProfileSection({setLogout}) {
    const [isNoticeAllow, setIsNoticeAllow] = useState(false);
    const {mutate} = useMutation(logout, {
        onSuccess: async () => {
            await deleteAccessToken();
            await deleteRefreshToken();
            await deleteUser();
            await deleteCurrentCommunity();
            setLogout();
        }
    })

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
                <TouchableOpacity style={styles.Logout} onPress={() => mutate()}>
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


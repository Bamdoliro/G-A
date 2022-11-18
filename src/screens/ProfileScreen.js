import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {baseUrl} from "../utils/api/urls";
import ProfileImage from '../assets/profile_image.png';
import {useState} from 'react';
import LightHeader from "../components/common/header/LightHeader/LightHeader";
import Toggle from "../components/common/input/Toggle/Toggle";

export default function ProfileScreen() {
    const [isNoticeAllow, setIsNoticeAllow] = useState(false);
    const logoutUser = async () => {
        try {
            const accessToken = await AsyncStorage.getItem("access-token");
            await AsyncStorage.removeItem("access-token");
            const response = await axios.delete(`${baseUrl}/auth`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <SafeAreaView style={styles.root}>
            <LightHeader
                title="설정"
                buttonText="저장"
                buttonOnPress={() => {}}
                style={styles.header}
                allowBack={false}
            />
            <View style={styles.profileWrapper}>
                <View style={styles.profile}>
                    <Image source={ProfileImage} style={styles.ProfileImage}/>
                    <View style={styles.UserInfo}>
                        <Text style={styles.ID}>zi존간zi태영</Text>
                        <Text style={styles.Email}>bamdoridori11@gmail.com</Text>
                        <Text style={styles.EditProfile} onPress={() => {
                        }}>프로필 편집</Text>
                    </View>
                </View>
            </View>
            <View style={styles.Buttons}>
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        paddingHorizontal: 30,
        paddingTop: 30,
    },
    profileWrapper: {
        overflow: 'hidden',
        width: '100%',
        paddingBottom: 5
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#ffffff",
        paddingVertical: 24,
        paddingHorizontal: 40,

        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 1,
    },
    ProfileImage: {
        borderRadius: 99999
    },
    UserInfo: {
        marginLeft: 14
    },
    ID: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    Email: {
        color: '#929292',
        fontSize: 13,
    },
    EditProfile: {
        color: '#0D76FF',
        fontSize: 10
    },
    Buttons: {
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

import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import CustomButton from "../components/common/CustomButton/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUrl } from "../utils/api/urls";
import ProfileImage from '../assets/profile_image.png';
import { useState } from 'react';

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
            <View style={styles.GatiProduceHeader}>
                <TouchableOpacity style={{opacity: 0}} >
                    <Text style={styles.CompletionText}>
                        없음
                    </Text>
                </TouchableOpacity>
                <Text style={styles.GatiTitleText}>
                    설정
                </Text>
                <TouchableOpacity>
                    <Text style={styles.CompletionText}>
                        저장
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.UserProfile}>
                <View style={styles.UserProfileShadow}>
                    <Image source={ProfileImage} style={styles.ProfileImage} />
                    <View style={styles.UserInfo}>
                        <Text style={styles.ID}>zi존간zi태영</Text>
                        <Text style={styles.Email}>bamdoridori11@gmail.com</Text>
                        <Text style={styles.EditProfile} onPress={() => {}}>프로필 편집</Text>
                    </View>
                </View>
            </View>
            <View style={styles.Buttons}>
                <View style={styles.NoticeAllow}>
                    <Text style={styles.NoticeAllowText}>앱 내 알림 혀용</Text>
                    <TouchableOpacity
                        style={[styles.NoticeAllowSwitchBody, isNoticeAllow ? styles.NoticeNotAllowedSwitchBody : null]}
                        onPress={() => setIsNoticeAllow(cur => !cur)}
                    >
                        <View style={styles.NoticeAllowSwitchButton}></View>
                    </TouchableOpacity>
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
        alignItems: 'center'
    },
    GatiProduceHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 60,
        width: 300,
    },
    GatiTitleText: {
        fontSize: 19,
        fontWeight: "bold",
    },
    CompletionText: {
        fontSize: 15,
        color: "#0D76FF"
    },
    UserProfile: {
        overflow: 'hidden',
        width: '100%',
        paddingBottom: 5
    },
    UserProfileShadow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#ffffff",
        shadowColor: '#000',
        paddingVertical: 24,
        paddingHorizontal: 40,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
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
    NoticeAllowSwitchBody: {
        width: 38,
        backgroundColor: '#22D03E',
        borderRadius: 99999,
        alignItems: 'flex-start',
        padding: 3
    },
    NoticeNotAllowedSwitchBody: {
        alignItems: 'flex-end'
    },
    NoticeAllowSwitchButton: {
        width: 20,
        height: 20,
        backgroundColor: 'white',
        borderRadius: 999,
    },
    Logout: {
        marginBottom: 10
    }
})
import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUrl } from "../../utils/api/urls";
import { useState } from 'react';
import Toggle from "../common/input/Toggle/Toggle";
import { deleteAccessToken, deleteRefreshToken } from "../../utils/storage/token";
import InputFrame from '../common/frame/InputFrame/InputFrame';
import BasicInput from '../common/input/BasicInput/BasicInput';

export default function ProfileSection({ setLogout, isEditing }) {
    const [isNoticeAllow, setIsNoticeAllow] = useState(false);
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [reNewPassword, setReNewPassword] = useState("");
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
            {isEditing
                ? <KeyboardAvoidingView
                    style={editStyles.Edit}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <InputFrame
                        style={editStyles.Caption}
                        title="닉네임"
                        child={
                            <BasicInput
                                style={editStyles.Input}
                                value={nickname}
                                setValue={setNickname}
                                placeholder="nickname123"
                            />
                        }
                    />
                    <View style={editStyles.passwordInputs}>
                        <InputFrame
                            style={editStyles.Caption}
                            title="현재 비밀번호"
                            child={
                                <BasicInput
                                    style={editStyles.Input}
                                    value={password}
                                    setValue={setPassword}
                                    placeholder="••••••••"
                                    secureTextEntry
                                />
                            }
                        />
                        <InputFrame
                            style={editStyles.Caption}
                            title="비밀번호 수정"
                            child={
                                <BasicInput
                                    style={editStyles.Input}
                                    value={newPassword}
                                    setValue={setNewPassword}
                                    placeholder="••••••••"
                                    secureTextEntry
                                />
                            }
                        />
                        <InputFrame
                            style={editStyles.Caption}
                            title="비밀번호 재입력"
                            child={
                                <BasicInput
                                    style={editStyles.Input}
                                    value={reNewPassword}
                                    setValue={setReNewPassword}
                                    placeholder="••••••••"
                                    secureTextEntry
                                />
                            }
                        />
                    </View>
                </KeyboardAvoidingView>
                : <View style={styles.Settings}>
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
            }
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

const editStyles = StyleSheet.create({
    Edit: {
        paddingHorizontal: 45,
        flex: 1
    },
    Caption: {
        fontSize: 12
    },
    passwordInputs: {
        marginTop: 46
    },
    Input: {
        fontSize: 12
    }
})
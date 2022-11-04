import React, {useState} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CustomInput from "../components/common/CustomInput/CustomInput";
import Logo from "../assets/img.png";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../components/common/CustomButton/CustomButton";
import axios from "axios";
import {baseUrl} from "../api/urls";

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [keepLogin, setKeepLogin] = useState(false);

    const loginUser = async () => {
        try {
            const response = await axios.post(`${baseUrl}/auth`, {
                "email": email,
                "password": password
            });
            await AsyncStorage.setItem("access-token", response.data.refreshToken);
            setEmail("");
            setPassword("");
            navigation.navigate("ChatListScreen");
        } catch (e) {
            console.log(e);
        }
    }

    const logoutUser = async () => {
        try {
            const accessToken = await AsyncStorage.getItem("access-token");
            const response = await axios.delete(`${baseUrl}/auth`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            await AsyncStorage.removeItem("access-token");
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.innerBox}>
                <Image source={Logo} style={styles.logo} resizeMode="contain"/>
                <CustomInput
                    placeholder="이메일 입력"
                    value={email}
                    setValue={email => setEmail(email)}
                />
                <CustomInput
                    placeholder="비밀번호 입력"
                    value={password}
                    setValue={password => setPassword(password)}
                    secureTextEntry={true}
                />
                <View style={styles.subArea}>
                    <TouchableOpacity
                        style={styles.keepCheck}
                        onPress={() => setKeepLogin(cur => !cur)}
                    >
                        <View style={keepLogin ? styles.keepButtonTrue : styles.keepButtonFalse}>
                            {keepLogin ? <View style={styles.keepButtonIcon} ></View> : null}
                        </View>
                        <Text style={styles.subText}>로그인 상태 유지</Text>
                    </TouchableOpacity>
                    <View style={styles.findButtons}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignUpScreen')}
                        >
                            <Text style={styles.subText}>회원가입</Text>
                        </TouchableOpacity>
                        <Text> | </Text>
                        <TouchableOpacity>
                            <Text style={styles.subText}>아이디, 비밀번호 찾기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.loginButton}>
                    <CustomButton
                        title="로그인"
                        onPress={loginUser}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    avoidingView: {
        flex: 1,
    },
    innerBox: {
        height: "70%",
        width: "84%",

        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

        alignItems: "center",
        justifyContent: "center",
    },
    loginButton: {
        width: "87%",
        height: 32,
        alignItems: "center",
    },

    logo: {
        bottom: "5%",
        width: "100%",
        height: "46%",
    },
    root: {
        flex: 1,
        backgroundColor: "#0D76FF",
        justifyContent: "center",
        alignItems: "center",
    },
    subArea: {
        width: '87%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subText: {
        fontSize: 10
    },
    findButtons: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    keepCheck: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    keepButtonFalse: {
        marginRight: 3,
        width: 14,
        height: 14,
        borderWidth: 2,
        borderColor: '#0D76FF',
        borderRadius: 4
    },
    keepButtonTrue: {
        marginRight: 3,
        width: 14,
        height: 14,
        borderRadius: 4,
        backgroundColor: '#0D76FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    keepButtonIcon: {
        width: 5,
        height: 5,
        borderRadius: 6,
        backgroundColor: 'white'
    }
});

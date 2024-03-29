import React, {useState} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CustomInput from "../components/common/input/CustomInput/CustomInput";
import Logo from "../assets/img.png";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../components/common/button/CustomButton/CustomButton";
import {useMutation, useQuery} from "react-query";
import {login} from "../utils/api/auth";
import {getUserInformation} from "../utils/api/user";
import {setUser} from "../utils/storage/user";
import {setAccessToken, setRefreshToken} from "../utils/storage/token";

export default function LoginScreen({navigation, setLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [keepLogin, setKeepLogin] = useState(false);

    const {mutate} = useMutation(login, {
        onSuccess: async (data) => {
            await setAccessToken(data.refreshToken);
            await setRefreshToken(data.refreshToken);
            const userInformation = await getUserInformation();
            await setUser(userInformation.id.toString());
            setEmail("");
            setPassword("");
            setLogin();
        },
    })

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
                            {keepLogin ? <View style={styles.keepButtonIcon}></View> : null}
                        </View>
                        <Text style={styles.subText}>로그인 상태 유지</Text>
                    </TouchableOpacity>
                    <View style={styles.findButtons}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignUpScreen')}
                        >
                            <Text style={styles.subText}>회원가입</Text>
                        </TouchableOpacity>
                        <Text style={styles.subText}> | </Text>
                        <TouchableOpacity>
                            <Text style={styles.subText}>아이디, 비밀번호 찾기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <CustomButton
                    text="로그인"
                    onPress={() => mutate({
                        email: email,
                        password: password
                    })}
                    style={styles.loginButton}
                />
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
        borderRadius: 30,

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
        marginTop: 20,
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
        color: '#636363',
        fontSize: 10,
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

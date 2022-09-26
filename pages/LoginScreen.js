import React, {useState} from "react";
import {Image, StyleSheet, View} from "react-native";
import CustomInput from "../components/CustomInput/CustomInput";
import Logo from "../assets/img.png";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../components/CustomButton/CustomButton";

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async () => {
        try {
            await AsyncStorage.setItem("access-token", email); // ㅎㅎ 나중에 수정하세욤
            // socket io client connect and subscribe
            navigation.navigate("ChatScreen");
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
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder="비밀번호 입력"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />
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
        width: "90%",
        height: 30,
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
});

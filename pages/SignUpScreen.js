import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustomInput from "../components/common/CustomInput/CustomInput";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import CustomButton from "../components/common/CustomButton/CustomButton";
export default function SignUpScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [name, setName] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [keepLogin, setKeepLogin] = useState(false);

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.innerBox}>
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
                <CustomInput
                    placeholder="비밀번호 재입력"
                    value={repassword}
                    setValue={repassword => setRepassword(repassword)}
                    secureTextEntry={true}
                />
                <CustomInput
                    placeholder="이름"
                    value={name}
                    setValue={name => setName(name)}
                    secureTextEntry={true}
                />
                <View style={styles.birthday}>
                    <Text>생년월일</Text>
                    <TextInput placeholder="YYYY" />
                    <Text>/</Text>
                    <TextInput placeholder="MM" />
                    <Text>/</Text>
                    <TextInput placeholder="DD" />
                </View>
                <View style={styles.gender}>
                    <Text>성별</Text>
                    <View style={styles.genderSelects}>
                        <TouchableOpacity>
                            <Text>여자</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>남자</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.keepCheck}
                        onPress={() => setAcceptTerms(cur => !cur)}
                    >
                        <View style={keepLogin ? styles.keepButtonTrue : styles.keepButtonFalse}>
                            {acceptTerms ? <View style={styles.keepButtonIcon} ></View> : null}
                        </View>
                        <Text style={styles.subText}>로그인 상태 유지</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.keepCheck}
                        onPress={() => setKeepLogin(cur => !cur)}
                    >
                        <View style={keepLogin ? styles.keepButtonTrue : styles.keepButtonFalse}>
                            {keepLogin ? <View style={styles.keepButtonIcon} ></View> : null}
                        </View>
                        <Text style={styles.subText}>로그인 상태 유지</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.signUpButton}>
                    <CustomButton
                        title="회원가입"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
    signUpButton: {
        width: "87%",
        height: 32,
        alignItems: "center",
    },
    birthday: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    gender: {
        alignItems: 'center'
    },
    genderSelects: {
        flexDirection: 'row'
    },
    root: {
        flex: 1,
        backgroundColor: "#0D76FF",
        justifyContent: "center",
        alignItems: "center",
    },
});
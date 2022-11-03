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
    const [termsService, setTermsService] = useState(false);
    const [termsPrivacy, setTermsPrivacy] = useState(false);

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
                <View style={styles.genderContainer}>
                    <Text style={styles.gender}>성별</Text>
                    <View style={styles.genderSelects}>
                        <TouchableOpacity>
                            <Text
                                style={styles.genderOption}
                            >여자</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text
                                style={styles.genderOption}
                            >남자</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.terms}>
                    <TouchableOpacity
                        style={[styles.termsCheck, styles.termsService]}
                        onPress={() => setTermsService(cur => !cur)}
                    >
                        <View style={termsService ? styles.termsButtonTrue : styles.termsButtonFalse}>
                            {termsService ? <View style={styles.termsButtonIcon} ></View> : null}
                        </View>
                        <Text style={styles.subText}>기타 이용약관 동의</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.termsCheck, styles.termsPrivacy]}
                        onPress={() => setTermsPrivacy(cur => !cur)}
                    >
                        <View style={termsPrivacy ? styles.termsButtonTrue : styles.termsButtonFalse}>
                            {termsPrivacy ? <View style={styles.termsButtonIcon} ></View> : null}
                        </View>
                        <Text style={styles.subText}>개인정보 수집 및 이용 동의</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signUpButton}>
                    <CustomButton
                        onPress={() => navigation.navigate('EmailAuthScreen')}
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
        alignItems: 'center',
        marginBottom: 10
    },
    genderContainer: {
        alignItems: 'center',
        marginBottom: 24
    },
    gender: {
        fontWeight: 'bold',
        color: '#999999',
        marginBottom: 5
    },
    genderSelects: {
        flexDirection: 'row',
    },
    genderOption: {
        paddingVertical: 2,
        paddingHorizontal: 14,
        backgroundColor: '#0D76FF',
        color: 'white',
        borderRadius: 14,
        marginHorizontal: 4
    },
    subText: {
        fontSize: 10
    },
    termsCheck: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    termsButtonFalse: {
        marginRight: 3,
        width: 14,
        height: 14,
        borderWidth: 2,
        borderColor: '#0D76FF',
        borderRadius: 4
    },
    termsButtonTrue: {
        marginRight: 3,
        width: 14,
        height: 14,
        borderRadius: 4,
        backgroundColor: '#0D76FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    termsButtonIcon: {
        width: 5,
        height: 5,
        borderRadius: 6,
        backgroundColor: 'white'
    },
    root: {
        flex: 1,
        backgroundColor: "#0D76FF",
        justifyContent: "center",
        alignItems: "center",
    },
    terms: {
        flexDirection: 'row',
    },
    termsService: {
        marginRight: 20
    },
    termsPrivacy: {
        marginLeft: 20
    }
});
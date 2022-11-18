import React, {useRef, useState} from "react";
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

import CustomInput from "../components/common/input/CustomInput/CustomInput";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import CustomButton from "../components/common/button/CustomButton/CustomButton";
import Close from '../assets/close.png';
import {useMutation} from "react-query";
import {join} from "../utils/api/user";

export default function SignUpScreen({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [name, setName] = useState("");
    const [termsService, setTermsService] = useState(false);
    const [termsPrivacy, setTermsPrivacy] = useState(false);
    const [gender, setGender] = useState(null);
    const [birthYear, setBirthYear] = useState(null);
    const [birthMonth, setBirthMonth] = useState(null);
    const [birthDay, setBirthDay] = useState(null);

    const passwordRef = useRef(null);
    const rePasswordRef = useRef(null);
    const nameRef = useRef(null);
    const birthYearRef = useRef(null);
    const birthMonthRef = useRef(null);
    const birthDayRef = useRef(null);

    const {mutate} = useMutation(join, {
        onSuccess: async () => {
            // navigation.navigate('EmailAuthScreen')
            navigation.navigate('LoginScreen')
        }
    })
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.innerBox}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    style={styles.closeBtn}
                >
                    <Image style={styles.close} source={Close}/>
                </TouchableOpacity>
                <Text style={styles.title}>회원가입</Text>
                <CustomInput
                    placeholder="이메일 입력"
                    value={email}
                    setValue={email => setEmail(email)}
                    onSubmitEditing={() => {
                        passwordRef.current.focus();
                    }}
                    returnKeyType="next"
                    blurOnSubmit={false}
                />
                <CustomInput
                    placeholder="비밀번호 입력"
                    value={password}
                    setValue={password => setPassword(password)}
                    secureTextEntry={true}
                    ref={passwordRef}
                    onSubmitEditing={() => {
                        rePasswordRef.current.focus();
                    }}
                    returnKeyType="next"
                    blurOnSubmit={false}
                />
                <CustomInput
                    placeholder="비밀번호 재입력"
                    value={rePassword}
                    setValue={repassword => setRePassword(repassword)}
                    secureTextEntry={true}
                    ref={rePasswordRef}
                    onSubmitEditing={() => {
                        nameRef.current.focus();
                    }}
                    returnKeyType="next"
                    blurOnSubmit={false}
                />
                <CustomInput
                    placeholder="이름"
                    value={name}
                    setValue={name => setName(name)}
                    ref={nameRef}
                    onSubmitEditing={() => {
                        birthYearRef.current.focus();
                    }}
                    returnKeyType="next"
                    blurOnSubmit={false}
                />
                <View style={styles.birthday}>
                    <Text style={[styles.birthdayText, styles.birthdayTitle]}>생년월일</Text>
                    <TextInput placeholder="YYYY" style={styles.birthdayYearInput}
                               placeholderTextColor='white'
                               maxLength={4}
                               value={birthYear}
                               onChangeText={year => setBirthYear(year)}
                               ref={birthYearRef}
                               onSubmitEditing={() => {
                                   birthMonthRef.current.focus();
                               }}
                               returnKeyType="next"
                               blurOnSubmit={false}
                    />
                    <Text style={styles.birthdayText}>/</Text>
                    <TextInput placeholder="MM" style={styles.birthdayMonthDayInput}
                               placeholderTextColor='white'
                               value={birthMonth}
                               onChangeText={month => setBirthMonth(month)}
                               ref={birthMonthRef}
                               maxLength={2}
                               onSubmitEditing={() => {
                                   birthDayRef.current.focus();
                               }}
                               returnKeyType="next"
                               blurOnSubmit={false}
                    />
                    <Text style={styles.birthdayText}>/</Text>
                    <TextInput placeholder="DD" style={styles.birthdayMonthDayInput}
                               placeholderTextColor='white'
                               value={birthDay}
                               onChangeText={day => setBirthDay(day)}
                               ref={birthDayRef}
                               maxLength={2}
                    />
                </View>
                <View style={styles.genderContainer}>
                    <Text style={styles.gender}>성별</Text>
                    <View style={styles.genderSelects}>
                        <TouchableOpacity
                            onPress={() => setGender('FEMALE')}
                            style={[styles.genderOption, gender === 'FEMALE' ? {backgroundColor: '#0D76FF'} : {backgroundColor: '#C4C4C4'}]}
                        >
                            <Text
                                style={styles.genderOptionText}
                            >여자</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setGender('MALE')}
                            style={[styles.genderOption, gender === 'MALE' ? {backgroundColor: '#0D76FF'} : {backgroundColor: '#C4C4C4'}]}
                        >
                            <Text
                                style={styles.genderOptionText}
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
                            {termsService ? <View style={styles.termsButtonIcon}></View> : null}
                        </View>
                        <Text style={styles.subText}>기타 이용약관 동의</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.termsCheck, styles.termsPrivacy]}
                        onPress={() => setTermsPrivacy(cur => !cur)}
                    >
                        <View style={termsPrivacy ? styles.termsButtonTrue : styles.termsButtonFalse}>
                            {termsPrivacy ? <View style={styles.termsButtonIcon}></View> : null}
                        </View>
                        <Text style={styles.subText}>개인정보 수집 및 이용 동의</Text>
                    </TouchableOpacity>
                </View>
                <CustomButton
                    onPress={() => {
                        if (rePassword === password) {
                            mutate({
                                email: email,
                                password: password,
                                name: name,
                                gender: gender,
                                birthYear: birthYear,
                                birthMonth: birthMonth,
                                birthDay: birthDay
                            })
                        } else {
                            alert('비밀번호가 다릅니다')
                        }
                    }}
                    title="회원가입"
                    style={styles.signUpButton}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    SignUpTitle: {
        position: "relative",
        bottom: 35,
        fontSize: 24,
        color: "#0D76FF",
        fontWeight: "bold"
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
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0D76FF',
        marginBottom: 42
    },
    closeBtn: {
        position: 'absolute',
        top: '3%',
        left: '6%',
    },
    close: {
        width: 42,
        height: 42
    },
    signUpButton: {
        width: "87%",
        height: 32,
        marginTop: 20,
    },
    birthday: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    birthdayText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#999999',
        marginHorizontal: 2
    },
    birthdayTitle: {
        marginRight: 12
    },
    birthdayYearInput: {
        paddingLeft: 8,
        width: 68,
        backgroundColor: '#BEC9E6',
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold'
    },
    birthdayMonthDayInput: {
        paddingLeft: 8,
        width: 52,
        backgroundColor: '#BEC9E6',
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold'
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
        backgroundColor: '#0D76FF',
        marginHorizontal: 4,
        borderRadius: 30,
    },
    genderOptionText: {
        paddingVertical: 5,
        paddingHorizontal: 14,
        color: 'white',
        fontWeight: 'bold',
    },
    subText: {
        color: '#636363',
        fontSize: 10,
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

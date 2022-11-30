import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import BlackGati from "../assets/BlackGati.png";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import CustomButton from "../components/common/button/CustomButton/CustomButton";
import Close from '../assets/close.png';

export default function EmailAuthScreen({navigation}) {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.innerBox}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    style={styles.closeBtn}
                >
                    <Image style={styles.close} source={Close}/>
                </TouchableOpacity>
                <Text style={styles.title}>
                    이메일을{"\n"}인증 해 주세요!
                </Text>
                <Image source={BlackGati} style={styles.logo} resizeMode="contain"/>
                <CustomButton
                    onPress={() => {
                    }}
                    text="인증 메일을 보냅니다!"
                    style={styles.sendMailButton}
                />
                <TouchableOpacity
                    style={styles.resendMail}
                >
                    <Text style={styles.resendMailText}>메일 재전송</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
        padding: 30
    },
    sendMailButton: {
        width: "87%",
        height: 32,
        marginTop: 20,
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
    logo: {
        bottom: "1%",
        width: 138,
        height: "46%",
    },
    resendMail: {
        width: 80,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#0D76FF',
        marginTop: 30,
    },
    resendMailText: {
        color: '#0D76FF',
        fontSize: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0D76FF',
        alignSelf: 'flex-start',
    },
    root: {
        flex: 1,
        backgroundColor: "#0D76FF",
        justifyContent: "center",
        alignItems: "center",
    },
});

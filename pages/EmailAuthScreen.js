import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";

import gatiLogo from "../assets/gatiLogo_White.png";
import SafeAreaView from "../components/common/SafeAreaView/SafeAreaView";
import CustomButton from "../components/common/CustomButton/CustomButton";
import Close from '../assets/close.png';

export default function EmailAuthScreen() {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.innerBox}>
                <Image style={styles.close} source={Close} 
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.title}>
                    이메일을{"\n"}인증 해 주세요!
                </Text>
                <Image source={gatiLogo} style={styles.logo} resizeMode="contain" tintColor="black" />
                <View style={styles.sendMailButton}>
                    <CustomButton
                        onPress={() => { }}
                        title="인증 메일을 보냅니다!"
                    />
                </View>
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
        padding: 30
    },
    sendMailButton: {
        width: "87%",
        height: 32,
        alignItems: "center",
    },
    close: {
        position: 'absolute',
        top: '3%',
        left: '6%',
        width: 42,
        height: 42
    },
    logo: {
        bottom: "5%",
        width: 118,
        height: "46%",
    },
    resendMail: {
        width: 80,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#0D76FF',
        marginTop: 20,
    },
    resendMailText: {
        color: '#0D76FF',
        fontSize: 10,
        textAlign: 'center'
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
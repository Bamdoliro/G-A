import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NoticeList({AlramTitle, AlramContent, SendHour, SendMinute}) {
    return (
        <View styles={styles.AlramSection}>
            <Text styles={styles.AlramTitle}>{AlramTitle}</Text>
            <Text styles={styles.SendTime}>오후{SendHour}시{SendMinute}분</Text>
            <Text styles={styles.AlramContent}>{AlramContent}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    AlramSection: {
        boxSizing: 'border-box',
        borderRadius: 12,
        backgroundColor: '#ECECEC',
        width: 325,
        height: 50,
        marginLeft: 32,
        marginTop: 145
    },
    AlramTitle: {

    },
    SendTime: {

    },
    AlramContent: {
        
    }
})
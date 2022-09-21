import React from 'react';
import { StyleSheet, View } from 'react-native';
import Arrow from '../../assets/arrow.png';
import NoticeList from './NoticeList';

export default function Notice() {
    return (
        <View>
            <View styles={styles.TextSection}>
                <Image
                    source={Arrow}
                    styles={styles.ArrowStyle}
                />
                <Text styles={styles.AlramStyle}>알림</Text>
            </View>
            <View styles={styles.NoticeLists}>
                <NoticeList AlramTitle = '자이 강아지 산책 모임' AlramContent='댓글:어제도 그러지 않았나요?' SendHour={7} SendMinute={41}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    TextSection: {
        boxSizing: 'border-box',
        marginTop: 76
    },
    ArrowStyle: {
        width: 29,
        height: 29,
        paddingLeft: 32
    },
    AlramStyle: {
        width: 37,
        height: 24,
        paddingRight: 176
    },
    NoticeLists: {

    }
})
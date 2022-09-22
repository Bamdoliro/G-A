import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import Arrow from '../../assets/arrow.png.png';
import NoticeList from './NoticeList';

export default function Notice() {
    return (
        <View>
            <View styles={styles.textSection}>
                <Image
                    source={Arrow}
                    styles={styles.arrowStyle}
                />
                <Text styles={styles.alramStyle}>알림</Text>
            </View>
            <View styles={styles.noticeLists}>
                <NoticeList AlramTitle = '자이 강아지 산책 모임' AlramContent='댓글:어제도 그러지 않았나요?' SendHour={7} SendMinute={41}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textSection: {
        boxSizing: 'border-box',
        marginTop: 76
    },
    arrowStyle: {
        width: 29,
        height: 29,
        paddingLeft: 32
    },
    alramStyle: {
        width: 37,
        height: 24,
        paddingRight: 176
    },
    noticeLists: {
        
    }
})
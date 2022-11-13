import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowIcon from "../assets/arrow.png"
import Delete from '../assets/delete.png'

export default function PinScreen({ navigation }) {
    const [pinCount, setPinCount] = useState('');
    const handleInputPin = pin => {
        if(pinCount.length >= 4) return;
        setPinCount(curPin => curPin + pin);
    }
    const onClickEnter = () => {
        if(pinCount.length < 4) return;
        console.log(pinCount);
    }

    return (
        <SafeAreaView style={styles.pinField}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Image
                        source={ArrowIcon}
                        style={styles.ArrowIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>PIN 설정</Text>
                <Image
                    source={ArrowIcon}
                    style={[styles.ArrowIcon, {opacity: 0}]}
                />
            </View>

            <View style={styles.pinShow}>
                <View style={styles.pinDots}>
                    <View style={pinCount.length > 0 ? styles.pinDotInputed : styles.pinDotUnInputed}></View>
                    <View style={pinCount.length > 1 ? styles.pinDotInputed : styles.pinDotUnInputed}></View>
                    <View style={pinCount.length > 2 ? styles.pinDotInputed : styles.pinDotUnInputed}></View>
                    <View style={pinCount.length > 3 ? styles.pinDotInputed : styles.pinDotUnInputed}></View>
                </View>
                <Text style={styles.pinShowText}>PIN번호 네자리를 입력하세요.</Text>
            </View>

            <View style={styles.pinInput}>
                <View style={styles.pinInputRow}>
                    <TouchableOpacity
                        style={styles.pinInputColumn}
                        onPressIn={() => handleInputPin('1')}
                    >
                        <Text style={styles.pinInputText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.pinInputColumn}
                        onPressIn={() => handleInputPin('2')}
                    >
                        <Text style={styles.pinInputText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.pinInputColumn}
                        onPressIn={() => handleInputPin('3')}
                    >
                        <Text style={styles.pinInputText}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pinInputRow}>
                    <TouchableOpacity
                        style={styles.pinInputColumn}
                        onPressIn={() => handleInputPin('4')}
                    >
                        <Text style={styles.pinInputText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.pinInputColumn}
                        onPressIn={() => handleInputPin('5')}
                    >
                        <Text style={styles.pinInputText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.pinInputColumn}
                        onPressIn={() => handleInputPin('6')}
                    >
                        <Text style={styles.pinInputText}>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pinInputRow}>
                    <TouchableOpacity
                        style={styles.pinInputColumn}
                        onPressIn={() => handleInputPin('7')}
                    >
                        <Text style={styles.pinInputText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.pinInputColumn}
                        onPressIn={() => handleInputPin('8')}
                    >
                        <Text style={styles.pinInputText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.pinInputColumn}
                        onPressIn={() => handleInputPin('9')}
                    >
                        <Text style={styles.pinInputText}>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pinInputRow}>
                    <TouchableOpacity
                        style={styles.pinInputColumn}
                        onPressIn={() => setPinCount(curPin => curPin.slice(0, curPin.length - 1))}
                    >
                        <Image source={Delete} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.pinInputColumn}
                        onPressIn={() => handleInputPin('0')}
                    >
                        <Text style={styles.pinInputText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.pinInputColumn}
                        onPressIn={onClickEnter}
                    >
                        <Text style={styles.pinInputText}>완료</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    pinField: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        marginTop: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 32
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    ArrowIcon: {
        width: 10,
        height: 20,
    },
    pinShow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    pinShowText: {
        fontSize: 12,
        color: '#0D76FF'
    },
    pinDots: {
        flexDirection: 'row',
        width: 115,
        justifyContent: 'space-between',
        marginBottom: 16
    },
    pinDotInputed: {
        width: 14,
        height: 14,
        backgroundColor: '#0D76FF',
        borderRadius: 999
    },
    pinDotUnInputed: {
        width: 14,
        height: 14,
        backgroundColor: '#999999',
        borderRadius: 999
    },
    pinInput: {
        flex: 1,
        backgroundColor: '#0D76FF',
    },
    pinInputRow: {
        flexDirection: 'row',
        flex: 1,
        width: '100%'
    },
    pinInputColumn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pinInputText: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: '300'
    }
})
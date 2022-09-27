import { View, StyleSheet, Image, Text } from "react-native";
import { useEffect } from "react-native";
import GatiLogo from '../../assets/gatiLogo.png'

export default function ChatNotification(){
    
    useEffect(() => {
        const timer = setTimeout(() => {
            <View style={{width: 0, height: 0}}>
                <Image style={{width: 0, height: 0}} />
                <View>
                    <Text style={{width: 0, height: 0}}>안내</Text>
                    <Text style={{width: 0, height: 0}}>갑작스러운 만남은 우선 주의하세요!</Text>
                </View>
        </View>
        }, 10000); // 10초 후 컴포넌트 요소들을 width: 0, height: 0으로 변경해 컴포넌트를 숨긴다
        return () => clearTimeout(timer);
    })

    return (
        <View style={styles.container}>
            <Image source={GatiLogo} style={styles.logoImage} />
            <View>
                <Text style={styles.notiText}>안내</Text>
                <Text style={styles.notiContent}>갑작스러운 만남은 우선 주의하세요!</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 332,
        height: 48,
        // backgroundColor: 'white',
        marginBottom: 12,
        boxSizing: 'borderBox',
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#F9F9FF'
    },
    logoImage: {
        width: 21.38,
        height: 27,
        marginRight: 20
    },
    notiText: {
        color: '#2A8CFF',
        fontWeight: 500,
        fontSize: 12,
    },
    notiContent: {
        fontWeight: 400,
        fontSize: 10,
        color: '#777777'
    }
})
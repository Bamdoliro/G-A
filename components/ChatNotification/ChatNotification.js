import { View, StyleSheet, Image, Text } from "react-native";
import GatiLogo from '../../assets/gatiLogo.png'

export default function ChatNotification(){
    return (
        <View style={styles.container}>
            <Image source={GatiLogo} style={styles.logoImage} />
            <Text style={styles.notiText}>안내</Text>
            <Text style={styles.NotiContent}>갑작스러운 만남은 우선 주의하세요!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 332,
        height: 48,
        marginLeft: 27,
        marginTop: 584
    },
    logoImage: {
        width: 21.38,
        height: 27,
        marginLeft: 42,
        marginTop: 595
    },
    notiText: {
        color: '#2A8CFF',
        fontWeight: 500,
        fontSize: 12,
        marginLeft: 83,
        marginTop: 592
    },
    NotiContent: {
        marginLeft: 83,
        marginTop: 610,
        fontWeight: 400,
        fontSize: 10,
        color: '#777777'
    }
})
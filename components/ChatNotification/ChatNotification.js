import { View, StyleSheet, Image, Text } from "react-native";
import GatiLogo from '../../assets/gatiLogo.png'

export default function ChatNotification(){
    return (
        <View style={styles.container}>
            <Image source={GatiLogo} style={styles.logoImage} />
            <View>
                <Text style={styles.notiText}>안내</Text>
                <Text style={styles.NotiContent}>갑작스러운 만남은 우선 주의하세요!</Text>
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
    NotiContent: {
        fontWeight: 400,
        fontSize: 10,
        color: '#777777'
    }
})
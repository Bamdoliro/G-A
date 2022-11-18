import {Image, StyleSheet, Text, View} from "react-native";
import gatiLogo from "../../../../assets/gatiLogo.png";

export default function ChatNotificationToast({text1, text2}){

    return (
        <View style={styles.container}>
            <Image source={gatiLogo} style={styles.logoImage} />
            <View>
                <Text style={styles.notiText}>{text1}</Text>
                <Text style={styles.notiContent}>{text2}</Text>
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
        marginTop: 130,
        boxSizing: 'borderBox',
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#fff',
        opacity: 0.9,
    },
    logoImage: {
        width: 21.38,
        height: 27,
        marginRight: 20
    },
    notiText: {
        color: '#2A8CFF',
        fontWeight: 'Medium',
        fontSize: 12,
    },
    notiContent: {
        fontWeight: 'Normal',
        fontSize: 10,
        color: '#777777'
    }
})

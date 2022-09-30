import { Image, StyleSheet, View } from "react-native";

export default function MyCommunity() {
    return (
        <View style={styles.MyCommunity}>
            <Image />
        </View>
    )
}

const styles = StyleSheet.create({
    MyCommunity: {
        width: 126,
        height: 126,
        backgroundColor: '#BEC9E6',
        borderRadius: 14,
        marginLeft: 7,
        marginRight: 7
    }
})
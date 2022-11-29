import { View, StyleSheet, Image, Text } from "react-native";
import FeedImg from "../../../assets/feedImage.png"

export default function PostDetail() {
    return (
        <View style={styles.container}>
            <Image 
                source={FeedImg}
                style={styles.img}
            />
            <Text style={styles.title}>세탁기 빨래 본인 것만 가져가 주세요...</Text>
            <Text style={styles.explanation}>
                요즘에 세탁물 분실 사례가 너무 많은데 본인 빨래만 가져가고 본인 빨래가 아니다
                싶으면 세탁실에 다시 돌려 놓아 주세요... ehdgoanfrhfaafdsfvxcjhjfdkoslkm
                jhgghjlkmnbghhjlk.,mnbhjkl.,mnhj;l,.mh
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    img: {
        width: "100%",
        borderRadius: 4,
        height: 220,
        marginBottom: 10
    },
    title: {
        fontSize: 15,
        fontWeight: "500",
        color: "#00000",
        marginBottom: 4
    },
    explanation: {
        fontSize: 13,
        color: "#636363"
    }
})
import { View, StyleSheet, Image, Text } from "react-native";
import PostDetailComment from "./PostDetailComment";
import Seokkamoni from "../../../assets/seokkamoni.png"

export default function PostDetail({img, title, explanation}) {
    return (
        <View style={styles.container}>
            <Image 
                source={img}
                style={styles.img}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.explanation}>
               {explanation}
            </Text>
            <PostDetailComment />
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
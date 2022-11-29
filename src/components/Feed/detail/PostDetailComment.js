import { Text, StyleSheet, View } from "react-native";
import PostDetailCommentItem from "./PostDetailCommentItem";
import Seokkamoni from "../../../assets/seokkamoni.png"

export default function PostDetailComment() {
    return (
        <>
            <Text style={styles.title}>댓글</Text>
            <View style={styles.container}>
                <PostDetailCommentItem 
                    img={Seokkamoni}
                    user="SEOKKAMONI"
                    comment="저는 김석진입니다 하하"
                    betime="20"
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    title: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 15
    }
})
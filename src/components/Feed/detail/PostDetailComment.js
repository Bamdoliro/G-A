import { Text, StyleSheet, View } from "react-native";
import PostDetailCommentItem from "./PostDetailCommentItem";
import Seokkamoni from "../../../assets/seokkamoni.png"
import CommentData from "../../../data/CommentData.json" 

export default function PostDetailComment() {
    return (
        <>
            <Text style={styles.title}>댓글</Text>
            <View style={styles.container}>
                {
                    CommentData.map((data) => 
                    <PostDetailCommentItem 
                        img={Seokkamoni}
                        user={data.user}
                        comment={data.comment}
                        betime={data.betime}
                    />
                     )
                }
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
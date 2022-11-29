import { Text, StyleSheet, ScrollView } from "react-native";
import PostDetailCommentItem from "./PostDetailCommentItem";

export default function PostDetailComment() {
    return (
        <>
            <Text style={styles.title}>댓글</Text>
            <ScrollView style={styles.container}>
                <PostDetailCommentItem />
                <PostDetailCommentItem />
                <PostDetailCommentItem />
                <PostDetailCommentItem />
                <PostDetailCommentItem />
                <PostDetailCommentItem />
                <PostDetailCommentItem />
            </ScrollView>
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
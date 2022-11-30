import {Text, StyleSheet, View} from "react-native";
import PostDetailCommentItem from "./PostDetailCommentItem";
import Seokkamoni from "../../../assets/seokkamoni.png"
import CommentData from "../../../data/CommentData.json"

export default function PostDetailComment({data}) {
    return (
        <View style={styles.container}>
            {data ?
                <>
                    <Text style={styles.title}>댓글</Text>
                    <View style={styles.commentContainer}>
                        {
                            data?.commentList.map((data) =>
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
                :
                <Text style={styles.no}>가장 먼저 댓글을 남겨보세요!</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
    },
    commentContainer: {
        height: "100%"
    },
    title: {
        marginTop: 15,
        fontSize: 15,
        fontWeight: "500",
        marginBottom: 15
    },
    no: {
        alignSelf: "center",
        color: "#B0B0B0",
        paddingTop: 40,
    }
})

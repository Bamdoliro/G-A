import { View, StyleSheet } from "react-native";
import PostList from "../PostList/PostList";
import PostListData from "../../../data/PostListData.json"

export default function PostFrame() {
    return (
        <View style={styles.PostFrame}>
            {
                PostListData.map((data, index) => (
                    <PostList
                        key={index}
                        Title={data.title}
                        Explanation={data.explanation}
                        numberOfComment={data.numberOfComment}
                        numberOfLike={data.numberOfLike}
                    />
                )
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    PostFrame: {
        width: "80%",
        alignItems: "center"
    }
})

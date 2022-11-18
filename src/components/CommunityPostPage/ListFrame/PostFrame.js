import { View, StyleSheet } from "react-native";
import PostList from "../PostList/PostList";
import PostListData from "../../../data/PostListData.json"

export default function PostFrame({navigation}) {
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
                        navigation={navigation}
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

import { View } from "react-native";
import PostList from "../PostList/PostList";
import PostListData from "../../../data/PostListData.json"

export default function PostFrame() {
    return (
        <View>
            <PostList
                    Title={PostListData.row.title}
                    Explanation={PostListData.row.explanation}
                    ChatOfNumber={PostListData.row.chatofnumber}
                    LikeOfNumber={PostListData.row.likeofnumber}
                />
        </View>
    )
}
import { View } from "react-native";
import PostList from "../PostList/PostList";

export default function PostFrame() {
    return (
        <View>
            <PostList
                    Title="세탁기 빨래 본인 것만 가져가 주세요..."
                    Explanation="요즘에 세탁물 분실 사례가 너무 많은데 
                    본인 빨래만 가져가고 본인 빨래가 아니다
                    싶으면 세탁실에 다시 돌려 놓아 주세요..."
                    ChatOfNumber={10}
                    LikeOfNumber={10}
                />
        </View>
    )
}
import Feed from "../PostList/Feed";
import PostListData from "../../../data/PostListData.json"
import GatiListData from "../../../data/GatiListData.json";
import GatiFeed from "../GatiPostList/GatiFeed";
import {FlatList} from "react-native";

export default function FeedFrame() {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={PostListData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
                <Feed
                    Title={item.title}
                    content={item.content}
                    numberOfComment={item.numberOfComment}
                    numberOfLikes={item.numberOfLikes}
                />
            )}
        />
    )
}

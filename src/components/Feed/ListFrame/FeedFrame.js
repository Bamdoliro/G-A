import Feed from "../PostList/Feed";
import {FlatList} from "react-native";

export default function FeedFrame({data}) {

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data?.boardList}
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

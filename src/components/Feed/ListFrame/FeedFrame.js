import Feed from "../PostList/Feed";
import {FlatList} from "react-native";

export default function FeedFrame({data}) {

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data?.boardList.reverse()}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
                <Feed
                    id={item.id}
                    Title={item.title}
                    content={item.content}
                    numberOfComment={item.numberOfComment}
                    numberOfLikes={item.numberOfLikes}
                />
            )}
        />
    )
}

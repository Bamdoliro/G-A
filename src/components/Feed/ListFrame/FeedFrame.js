import Feed from "../PostList/Feed";
import {FlatList} from "react-native";
import {useQuery} from "react-query";
import {getFeedsByCommunity} from "../../../utils/api/feed";
import {getCurrentCommunity} from "../../../utils/storage/currentCommunity";

export default function FeedFrame() {
    const {data} = useQuery('getFeedsByCommunity', async () => getFeedsByCommunity(await getCurrentCommunity()))

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

import GatiFeed from "../GatiPostList/GatiFeed";
import {FlatList} from "react-native";
import {useQuery} from "react-query";
import {getDdoByCommunity} from "../../../utils/api/ddo";
import {getCurrentCommunity} from "../../../utils/storage/currentCommunity";

export default function GatiFeedFrame() {
    const {data} = useQuery('getDdoByCommunity', async () => getDdoByCommunity(await getCurrentCommunity()))

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data?.ddoList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <GatiFeed
                    id={item.id}
                    capacity={item.capacity}
                    title={item.title}
                    content={item.content}
                    startDate={item.startDate}
                    endDate={item.endDate}
                />
            )}
        />
    )
}

import GatiFeed from "../GatiPostList/GatiFeed";
import GatiListData from "../../../data/GatiListData.json"
import {FlatList} from "react-native";

export default function GatiFeedFrame() {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={GatiListData}
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

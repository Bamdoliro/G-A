import GatiFeed from "../GatiPostList/GatiFeed";
import { FlatList } from "react-native";

export default function GatiFeedFrame({ data, socket }) {

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data?.ddoList.reverse()}
            keyExtractor={(item, index) => index.toString()}
            style={{ flexGrow: 1, flex: 1 }}
            renderItem={({ item }) => (
                <GatiFeed
                    id={item.id}
                    capacity={item.capacity}
                    title={item.title}
                    content={item.content}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    socket={socket}
                />
            )}
        />
    )
}

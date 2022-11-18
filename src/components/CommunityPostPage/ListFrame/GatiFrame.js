import { View, StyleSheet } from "react-native";
import GatiPostList from "../GatiPostList/GatiPostList";
import GatiListData from "../../../data/GatiListData.json"

export default function GatiFrame() {
    return (
        <View style={styles.GatiFrame}>
            {
                GatiListData.map((data, index) => (
                        <GatiPostList
                            key={index}
                            Title={data.title}
                            numberOfPeople={data.numberOfPeople}
                            Date={data.date}
                        />
                    )
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    GatiFrame: {
        width: "80%",
        alignItems: "center"
    }
})

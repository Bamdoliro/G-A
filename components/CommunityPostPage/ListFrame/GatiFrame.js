import { View, StyleSheet } from "react-native";
import GatiPostList from "../GatiPostList/GatiPostList";

export default function GatiFrame() {
    return (
        <View style={styles.GatiFrame}>
            <GatiPostList
                Title="세탁기 빨래 본인 것만 가져가 주세요..."
                HumanOfNumber={10}
                Date="05/23 ~ 06/23"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    GatiFrame: {
        width: "80%",
        alignItems: "center"
    }
}) 
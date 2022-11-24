import {StyleSheet, View} from "react-native";
import Select from "../../common/input/Select/Select";

export default function Category({category, setCategory}) {
    return (
        <View style={styles.container}>
            <Select
                text="게시글"
                selected={"FEED" === category}
                onPress={() => setCategory("FEED")}
            />
            <Select
                text="가티"
                selected={"GATI" === category}
                onPress={() => setCategory("GATI")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 10,
    }
})

import { View, StyleSheet } from "react-native";
import MainHeaderSearch from "./MainHeaderSearch";
import MainSubHeader from "./MainSubHeader"

export default function MainHeaderScreen() {
    return (
        <View style={styles.HeaderFrame}>
            <MainSubHeader />
            <MainHeaderSearch />
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderFrame: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: "#F2F2F2",
        height: 125,
        width: "100%",
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        backgroundColor: "#fff",

    }
})

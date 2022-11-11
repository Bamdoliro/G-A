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
        height: 125,
        width: "100%",
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        backgroundColor: "#fff",
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,

    }
})

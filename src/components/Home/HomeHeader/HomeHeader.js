import { View, StyleSheet } from "react-native";
import Search from "./Search";
import HomeSubHeader from "./HomeSubHeader"

export default function HomeHeader() {
    return (
        <View style={styles.HeaderFrame}>
            <HomeSubHeader />
            <Search />
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderFrame: {
        flexDirection: "column",
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

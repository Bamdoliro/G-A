import {StyleSheet, Text} from "react-native";
import Search from "../../common/input/Search/Search";
import MainHeader from "../../common/header/MainHeader/MainHeader";

export default function HomeHeader() {
    return (
        <MainHeader
            child={
                <>
                    <Text style={styles.title}>채팅</Text>
                    <Search
                        placeholder="채팅방 검색"
                    />
                </>
            }
            style={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-end"
    },
    title: {
        marginBottom: 10,
        fontSize: 25,
        fontWeight: "bold",
    },
})

import {StyleSheet, Text, View} from "react-native";
import Search from "../../common/input/Search/Search";
import MainHeader from "../../common/header/MainHeader/MainHeader";
import MenuBar from "../../Community/CommunityHeader/MenuBar";

export default function HomeHeader() {
    return (
        <MainHeader
            child={
                <>
                    <View style={styles.title}>
                        <MenuBar/>
                        <Text style={styles.title.text}>홈</Text>
                    </View>
                    <Search
                        placeholder="공동체 검색 또는 코드 입력"
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
        flexDirection: "row",
        marginBottom: 10,
        text: {
            fontSize: 25,
            fontWeight: "bold",
            marginLeft: 10
        }
    },
})

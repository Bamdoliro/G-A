import { ScrollView, StyleSheet, Text, View } from "react-native"
import CommunityList from "../../../components/Feed/CommunityList/CommunityList"

import { useQuery } from "react-query";
import { getMyCommunity } from "../../../utils/api/community";
import { getCurrentCommunity, setCurrentCommunity } from "../../../utils/storage/currentCommunity";

export default function SearchResult({ navigation, searchWord, numberOfSearches}) {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}>
                    <Text>"{searchWord}" 검색결과</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 5 }}>
                        <View style={styles.dot} />
                        <Text style={{ color: "#0D76FF" }}>{numberOfSearches}건</Text>
                    </View>
                </View>
                <CommunityList 
                    title="김석진의 타이틀"
                    content="김석진의 컨텐트 입니다"
                    numberOfPeople={12}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30
    },
    dot: {
        width: 3,
        height: 3,
        backgroundColor: "#0D76FF",
        borderRadius: "50%",
        marginRight: 1
    }
})
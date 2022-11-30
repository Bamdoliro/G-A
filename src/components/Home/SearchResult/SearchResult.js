import { ScrollView, StyleSheet, Text, View } from "react-native"
import CommunityList from "../../../components/Feed/CommunityList/CommunityList"

import { useQuery } from "react-query";
import { getMyCommunity } from "../../../utils/api/community";
import { getCurrentCommunity, setCurrentCommunity } from "../../../utils/storage/currentCommunity";

export default function SearchResult({ navigation, SearchWord, numberOfSearches}) {
    const { data } = useQuery('getMyCommunity', getMyCommunity, {
        onSuccess: async () => {

            if (!await getCurrentCommunity() && data?.communityList != null) {
                await setCurrentCommunity(data.communityList[0].id.toString());
            }
        }
    })
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}>
                    <Text>"{SearchWord}" 검색결과</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 5 }}>
                        <View style={styles.dot} />
                        <Text style={{ color: "#0D76FF" }}>{numberOfSearches}건</Text>
                    </View>
                </View>
                {
                    data?.communityList.map((community, index) =>
                        <CommunityList
                            title={community.name}
                            content={community.introduction}
                            numberOfPeople={community.numberOfPeople}
                            backgroundImage={community.backgroundImage}
                            key={index}
                            onPress={async () => {
                                await setCurrentCommunity(community.id);
                                navigation.navigate('CommunityScreen');
                            }}
                        />
                    )
                }
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
import {ScrollView, View, Text, StyleSheet} from "react-native";
import CommunityList from "../../Feed/CommunityList/CommunityList";
import {useQuery} from "react-query";
import {getMyCommunity} from "../../../utils/api/community";
import {getCurrentCommunity, setCurrentCommunity} from "../../../utils/storage/currentCommunity";
import {useNavigation} from "@react-navigation/native";

export default function MyCommunity() {
    const navigation = useNavigation();
    const {data} = useQuery('getMyCommunity', getMyCommunity, {
        onSuccess: async () => {
            if (!await getCurrentCommunity() && data?.communityList != null) {
                await setCurrentCommunity(data.communityList[0].id.toString());
            }
        }
    })

    return (
        <View>
            <View style={styles.MyCommunityTitle}>
                <Text style={styles.MyCommunityH1}>내 커뮤니티</Text>
            </View>
            <ScrollView
                style={styles.MyCommunityScrollView}
                showsHorizontalScrollIndicator={false}
            >
                {
                    data?.communityList.map((community, index) =>
                        <CommunityList
                            title={community.name}
                            content={community.introduction}
                            numberOfPeople={community.numberOfPeople}
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
    MyCommunityTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 10,
        marginTop: 20,
        paddingHorizontal: 30
    },
    MyCommunityH1: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    MyCommunityScrollView: {
        paddingHorizontal: 30
    },
    MyCommunityShowMore: {
        fontSize: 14,
        color: '#0D76FF'
    }
});

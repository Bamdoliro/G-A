import {ScrollView, View, Text, StyleSheet} from "react-native";
import CommunityList from "../../Feed/CommunityList/CommunityList";

export default function MyCommunity() {
    return (
        <View>
            <View style={styles.MyCommunityTitle}>
                <Text style={styles.MyCommunityH1}>내 커뮤니티</Text>
            </View>
            <ScrollView
                style={styles.MyCommunityScrollView}
                showsHorizontalScrollIndicator={false}
            >
                <CommunityList />
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